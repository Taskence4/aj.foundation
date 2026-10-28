export const CONTACT_EMAIL = "info@aj.foundation";
export const CAREERS_EMAIL = "careers@aj.foundation";
export const CONTACT_PHONE = "+91 80500 89834";
export const CONTACT_PHONE_HREF = "tel:+918050089834";

export const LEGAL_NAME = "AJ FOUNDATION";
export const LEGAL_FORM = "Public Charitable Trust";
export const REGISTRATION_NO = "E-0041114(GBR)";
export const REGISTERED_OFFICE = ["239, Veena Mall, W.E. Highway", "Kandivali (East), Thakur Complex", "Mumbai – 400101"];
export const OPERATIONAL_OFFICE = ["Co Space Connect", "#579, 10th Main, 32nd D Cross, 10th Main Road", "4th Block, Bengaluru, Karnataka 560011"];

// Public Web3Forms access key (https://web3forms.com). It is tied to the inbox that
// receives submissions and is safe to publish. While empty, the forms fall back to
// opening an email draft addressed to CONTACT_EMAIL.
export const WEB3FORMS_ACCESS_KEY = "";

export const formsSubmitDirectly = WEB3FORMS_ACCESS_KEY !== "";

export type EnquiryResult = "sent" | "draft";

export async function submitEnquiry({
  subject,
  replyTo,
  fields,
  botcheck,
}: {
  subject: string;
  replyTo: string;
  fields: [label: string, value: string][];
  botcheck: boolean;
}): Promise<EnquiryResult> {
  const filled = fields.filter(([, value]) => value.trim() !== "");

  if (!formsSubmitDirectly) {
    const body = filled.map(([label, value]) => (label === "Message" ? `\n${value}` : `${label}: ${value}`)).join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return "draft";
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: "AJ Foundation website",
      replyto: replyTo,
      botcheck,
      ...Object.fromEntries(filled),
    }),
  });
  const result = await response.json().catch(() => null);
  if (!response.ok || !result?.success) throw new Error(result?.message ?? "Submission failed");
  return "sent";
}
