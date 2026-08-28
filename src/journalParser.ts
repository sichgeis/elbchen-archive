const readAttribute = (attributes: string, name: string) => {
  const staticAttribute = attributes.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`));
  if (staticAttribute) return staticAttribute[1];

  const boundAttribute = attributes.match(new RegExp(`:${name}="'([^']*)'"`));
  return boundAttribute?.[1] ?? "";
};

const escapeHtml = (value: string) => value
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

const renderInfoBoxes = (source: string) => source.replace(
  /<InfoBox\s+([\s\S]*?)\s*\/>/g,
  (_, attributes: string) => {
    const title = readAttribute(attributes, "title");
    const description = readAttribute(attributes, "description");
    const content = readAttribute(attributes, "content");

    return `<aside class="article-callout">
      <p class="article-callout-label">${escapeHtml(title)}</p>
      <h2>${escapeHtml(description)}</h2>
      <p>${escapeHtml(content)}</p>
    </aside>`;
  },
);

const renderLinks = (source: string, homeHref: string) => source.replace(
  /<NuxtLink\s+([\s\S]*?)>([\s\S]*?)<\/NuxtLink\s*>/g,
  (_, attributes: string, content: string) => {
    let href = readAttribute(attributes, "to");
    if (href === "/" || href.startsWith("/offering")) href = homeHref;
    const external = /^https?:\/\//.test(href);
    const extraAttributes = external ? ' target="_blank" rel="noreferrer"' : "";
    return `<a href="${escapeHtml(href)}"${extraAttributes}>${content}</a>`;
  },
);

export const parseJournalSource = (source: string, homeHref: string) => {
  const template = source.match(/<template>([\s\S]*?)<\/template>/)?.[1] ?? "";
  let body = template.match(/<article>([\s\S]*?)<\/article>/)?.[1] ?? "";

  body = body.replace(
    /^\s*<StyledH1>[\s\S]*?<\/StyledH1>\s*<div class="mb-6 mt-2 flex items-center gap-4">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
    "",
  );
  body = renderInfoBoxes(body);
  body = renderLinks(body, homeHref);
  body = body
    .replace(/<LucideExternalLink[\s\S]*?\/>/g, '<span class="inline-external" aria-hidden="true">↗</span>')
    .replace(/<StyledH2>/g, "<h2>")
    .replace(/<\/StyledH2>/g, "</h2>")
    .replace(/<StyledParagraph>/g, "<p>")
    .replace(/<\/StyledParagraph>/g, "</p>")
    .replace(/<StyledUl>/g, "<ul>")
    .replace(/<\/StyledUl>/g, "</ul>")
    .replace(/<p>([\s\S]*?)<ul>/g, "<p>$1</p><ul>")
    .replace(/<\/ul>\s*<\/p>/g, "</ul>")
    .replace(/\sclass="(?:underline|inline-flex items-center hover:underline)"/g, "")
    .trim();

  return body;
};
