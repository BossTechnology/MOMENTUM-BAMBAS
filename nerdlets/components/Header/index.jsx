// Librarys
import { memo, useState } from "react";

// Components
import Button from "../Button";
import Select from "../Select";
import MenuIcon from "../icons/menu-icon";

// Constants
import { filterOptions, TOTAL_PRODUCTION } from "./constants";

// Images
import bambasLogo from "./logos/bambas-logo.png";
import bossTechLogo from "./logos/boss-tech-logo.png";

function Header() {
  const [filter, setFilter] = useState(TOTAL_PRODUCTION);

  return (
    <header className="app-header position-fixed w-100 d-flex align-items-center">
      <div className="box pe-5 py-2 w-100 mx-auto d-flex align-items-center justify-content-between position-relative">
        <div className="app-logo-box d-flex align-items-center column-gap-3">
          <Button icon={<MenuIcon />} className="btn-menu p-0 bg-transparent me-1" />

          <img
            width={112}
            height={38}
            loading="lazy"
            alt="bambas-logo"
            fetchpriority="high"
            className="app-logo object-fit-contain"
            src={bambasLogo}
          />

          <Select
            className="ms-3"
            selectedValue={filter}
            options={filterOptions}
            onChange={(option) => setFilter(option?.value)}
          />
        </div>

        <div className="d-flex align-items-center column-gap-1">
          <img
            width={47}
            height={44}
            loading="lazy"
            alt="boss-tech-logo"
            fetchpriority="high"
            className="boss-tech-logo"
            src={bossTechLogo}
          />

          <h6 className="subtitle mb-0 fw-semibold">MOMENTUM</h6>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
