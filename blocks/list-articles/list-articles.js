export default async function decorate(block) {
  const articleLists = block.querySelector("a[href$='.json']");
  if (articleLists) {
    const resp = await fetch(articleLists.href);
    const results = await resp.json();

    results.data.forEach((row) => {
      if (row.category === 'magazine') {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('magazine-article-item');
        const link = document.createElement('a');
        // eslint-disable-next-line no-script-url
        link.href = row.link ? row.link : 'javascript:void(0);';
        const img = document.createElement('img');
        img.src = row.image;
        img.alt = row.title;
        img.className = 'eds-mag-thumb';
        const title = document.createElement('h3');
        title.className = 'mag-article-heading';
        title.textContent = row.title;
        const paragraph = document.createElement('p');
        paragraph.textContent = row.description;

        link.appendChild(img);
        link.appendChild(title);
        articleDiv.appendChild(link);
        articleDiv.appendChild(paragraph);
        block.appendChild(articleDiv);
        articleLists.replaceWith();
      }
    });
  }
}
