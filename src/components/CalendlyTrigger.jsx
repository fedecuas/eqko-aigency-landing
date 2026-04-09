import { PopupButton } from "react-calendly";

export default function CalendlyTrigger({ 
  className, 
  text = "Agendar Consultoría", 
  url = "https://calendly.com/eqko_aigency/consultoria-diagnostico"
}) {
  return (
    <PopupButton
      url={url}
      rootElement={document.getElementById("root")}
      text={text}
      className={className}
    />
  );
}
