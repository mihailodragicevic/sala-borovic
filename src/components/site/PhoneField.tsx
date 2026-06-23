import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "libphonenumber-js";
import "react-phone-number-input/style.css";

type Props = {
  value: string | undefined;
  onChange: (value: string | undefined, isValid: boolean) => void;
  hasError: boolean;
};

const PhoneField = ({ value, onChange, hasError }: Props) => (
  <>
    <style>{`
      .PhoneInput {
        display: flex;
        align-items: center;
        height: 3rem;
        background: linear-gradient(145deg, hsl(270 20% 10% / 0.92) 0%, hsl(270 22% 7% / 0.96) 100%);
        border: 1px solid hsl(var(--border) / 0.9);
        border-radius: 0.9rem;
        transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        font-family: inherit;
        position: relative;
        overflow: hidden;
        box-shadow: inset 0 1px 0 hsl(0 0% 100% / 0.03);
      }

      .PhoneInput.error {
        border-color: rgb(239, 68, 68);
      }

      .PhoneInput:focus-within {
        border-color: hsl(var(--primary) / 0.75);
        box-shadow: 0 0 0 4px hsl(var(--primary) / 0.14);
      }

      .PhoneInputCountry {
        position: relative;
        display: flex;
        align-items: center;
        align-self: stretch;
        gap: 0.5rem;
        padding: 0 0.85rem 0 0.9rem;
        border-right: 1px solid hsl(var(--border) / 0.9);
        background: linear-gradient(180deg, hsl(290 22% 16% / 0.72) 0%, hsl(270 20% 10% / 0.86) 100%);
      }

      .PhoneInputCountrySelect {
        appearance: none;
        -webkit-appearance: none;
        border: 0;
        cursor: pointer;
        height: 100%;
        min-width: 5.4rem;
        padding: 0 1.7rem 0 0;
        font-size: 0.95rem;
        font-weight: 700;
        letter-spacing: 0.02em;
        display: flex;
        align-items: center;
        background: transparent;
        color: hsl(var(--foreground));
        outline: none;
        text-shadow: 0 1px 10px hsl(320 75% 60% / 0.12);
      }

      .PhoneInputCountrySelect:hover {
        color: hsl(var(--primary));
      }

      .PhoneInputCountrySelect option {
        background: hsl(270 18% 10%);
        color: hsl(var(--foreground));
        font-size: 0.95rem;
        font-weight: 600;
      }

      .PhoneInputCountrySelect option:checked {
        background: hsl(320 45% 24%);
        color: hsl(var(--foreground));
      }

      .PhoneInputCountrySelect option:disabled {
        background: hsl(270 14% 13%);
        color: hsl(var(--muted-foreground));
      }

      .PhoneInputCountrySelectArrow {
        margin-left: 0;
        color: hsl(var(--primary));
        opacity: 0.95;
        transform: scale(1.05);
      }

      .PhoneInputNumber {
        flex: 1;
        background: none;
        border: none;
        outline: none;
        color: hsl(var(--foreground));
        font-size: 1rem;
        padding: 0.5rem 0.9rem;
        font-weight: 500;
      }

      .PhoneInputNumber::placeholder {
        color: hsl(var(--muted-foreground));
      }

      .PhoneInputCountryIcon {
        box-shadow: 0 0 0 1px hsl(var(--border) / 0.65);
        border-radius: 999px;
        overflow: hidden;
      }

      .PhoneInputCountryIconImg {
        display: block;
      }

      @media (max-width: 640px) {
        .PhoneInputCountry {
          padding-right: 0.7rem;
          padding-left: 0.75rem;
        }

        .PhoneInputCountrySelect {
          min-width: 4.8rem;
          font-size: 0.9rem;
        }
      }
    `}</style>
    <PhoneInput
      id="contact-phone"
      international
      defaultCountry="RS"
      value={value}
      onChange={(next) => onChange(next, next ? isValidPhoneNumber(next) : false)}
      placeholder="Unesite broj telefona"
      className={`PhoneInput ${hasError ? "error" : ""}`}
      numberInputProps={{
        name: "phone",
        className: "PhoneInputNumber",
      }}
    />
  </>
);

export default PhoneField;
