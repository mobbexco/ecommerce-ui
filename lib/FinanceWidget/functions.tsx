import { FeaturedInstallment, PaymentSource } from "./Interfaces";
import { Installment } from "./Interfaces";

/**
 * Formats tags accumulating them in a new object
 */
export function formatTags(tags: any) {
  if (!tags || tags.length < 1) {
    return {};
  }
  const formattedTags = tags.reduce((OTags: any, tag: any) => {
    OTags[tag.label] = tag.value;
    console.log("formatTags OTags", OTags);
    return OTags;
  }, {});

  return formattedTags;
}

export function stylizeText(installments: string) {
  // Sets text to colorize
  const stringToColorize = /sin[ ]?inter[eé]s/i;
  // Extract number in string
  const numberMatch = installments.match(/\d+/);
  const number = numberMatch ? numberMatch[0] : '';
  let text = installments.replace(/^\d+/, '').trim();

  // Set installment number with string style
  const boldNumber = (
    <span>
      <strong>{number}</strong>
    </span>
  );

  // Add colour to stringToColorize if exists
  const interestMatch = stringToColorize.test(text);
  if (interestMatch) {
    text = text.replace(
      stringToColorize,
      (match) =>
        `<span class='text-mobbexGreen-light dark:text-mobbexGreen-dark'>${match}</span>`
    );
  }

  const coloredText = (
    <span
      dangerouslySetInnerHTML={{
        __html: interestMatch ? text : installments.replace(/^\d+/, '').trim(),
      }}
    />
  );

  return [boldNumber, coloredText];
}
