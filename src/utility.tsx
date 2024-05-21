const parseAnnotatedString = (input: string): JSX.Element[] => {
  // Split the input string by | to separate paragraphs
  const paragraphs = input.split("|");

  // Function to replace markdown links with JSX <a> elements
  const replaceLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
    return text.replace(linkRegex, (_, linkText, url) => {
      return `<a href="${url}" target="_blank" rel="noreferrer">${linkText}</a>`;
    });
  };

  // Generate JSX for each paragraph
  return paragraphs.map((paragraph, index) => {
    // Replace markdown links with JSX <a> elements
    const withLinks = replaceLinks(paragraph);
    // Create a JSX element for the paragraph
    return <p key={index} dangerouslySetInnerHTML={{ __html: withLinks }} />;
  });
};

export { parseAnnotatedString };
