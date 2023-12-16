import { Button } from "../_ui";
import s from "./LeadingContent.module.css";
import { ReactComponent } from "../../icons/chevron-right.svg";

export default function LeadingContent() {
  return (
    <div className={s.leadingContent}>
      <div className={s.callout}>
        <Button href="/" className={s.calloutHiring} size="sm">
          <span className={s.calloutHiringLabel}>We are hiring</span>
        </Button>
        <a href="/" className={s.careersLink}>
          Visit our careers page
          <ReactComponent />
        </a>
      </div>
      <h1 className={s.heading}>
        <div>A better way to</div>
        <div className={s.headingSubsectionBottom}>ship web apps</div>
      </h1>
      <p>
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
      </p>
    </div>
  );
}
