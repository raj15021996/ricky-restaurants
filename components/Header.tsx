'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import Image from 'next/image';
import logo from '@/assets/images/rickylogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { useIsMobile } from '@/hooks/use-mobile';
import { ROUTE_PATH } from '@/utils/constant';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Nested submenu hover states (desktop)
  const [privateCateringOpen, setPrivateCateringOpen] = useState(false);
  const [corporateCateringOpen, setCorporateCateringOpen] = useState(false);

  // Accordion states for mobile
  const [menuAccOpen, setMenuAccOpen] = useState(false);
  const [cateringAccOpen, setCateringAccOpen] = useState(false);
  const [privateAccOpen, setPrivateAccOpen] = useState(false);
  const [corporateAccOpen, setCorporateAccOpen] = useState(false);
  
  const isMobile = useIsMobile();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href={ROUTE_PATH.home} className={styles.logo}>
            <Image src={logo} alt="logo" className={styles.logoImg} />
          </Link>
        </div>
        <div className={styles.navContainer}>
          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>

            {/* Close button - mobile only */}
            <button
              className={styles.navCloseBtn}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &#10005;
            </button>

            <Link href={ROUTE_PATH.home} className={styles.navLink}>HOME</Link>
            <Link href={ROUTE_PATH.about} className={styles.navLink}>ABOUT US</Link>

            {/* ── MENU ── */}
            {isMobile ? (
              <div className={styles.accordionWrapper}>
                <button
                  className={styles.accordionToggle}
                  onClick={() => setMenuAccOpen(!menuAccOpen)}
                >
                  MENU
                  <span className={`${styles.accordionArrow} ${menuAccOpen ? styles.accordionArrowOpen : ''}`}>&#8964;</span>
                </button>
                {menuAccOpen && (
                  <div className={styles.accordionBody}>
                    <Link href={ROUTE_PATH.menu} className={styles.accordionItem}>CATERING</Link>
                  </div>
                )}
              </div>
            ) : (
              <Dropdown className={styles.dropdownWrapper}>
                <Dropdown.Toggle as="a" className={styles.dropdownToggle}>
                  MENU
                </Dropdown.Toggle>
                <Dropdown.Menu className={styles.dropdownMenu}>
                  <Dropdown.Item as={Link} href={ROUTE_PATH.menu} className={`${styles.dropdownItem} ${styles.nestedToggle}`}>
                    CATERING
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}

            {/* ── CATERING ── */}
            {isMobile ? (
              <div className={styles.accordionWrapper}>
                <button
                  className={styles.accordionToggle}
                  onClick={() => setCateringAccOpen(!cateringAccOpen)}
                >
                  CATERING
                  <span className={`${styles.accordionArrow} ${cateringAccOpen ? styles.accordionArrowOpen : ''}`}>&#8964;</span>
                </button>
                {cateringAccOpen && (
                  <div className={styles.accordionBody}>

                    {/* Private Catering nested */}
                    <button
                      className={styles.accordionNestedToggle}
                      onClick={() => setPrivateAccOpen(!privateAccOpen)}
                    >
                      Private Catering
                      <span className={`${styles.accordionArrow} ${privateAccOpen ? styles.accordionArrowOpen : ''}`}>&#8964;</span>
                    </button>
                    {privateAccOpen && (
                      <div className={styles.accordionNestedBody}>
                        <Link href={ROUTE_PATH.wedding} className={styles.accordionItem}>Wedding Catering</Link>
                        <Link href={ROUTE_PATH.birthday} className={styles.accordionItem}>Birthday Party Catering</Link>
                        <Link href={ROUTE_PATH.yatch} className={styles.accordionItem}>Yacht Party Catering</Link>
                        <Link href={ROUTE_PATH.special} className={styles.accordionItem}>Special Occasion Catering</Link>
                        <Link href={ROUTE_PATH.kids} className={styles.accordionItem}>Kids Party Catering</Link>
                        <Link href={ROUTE_PATH.getTogether} className={styles.accordionItem}>Get Together</Link>
                      </div>
                    )}

                    {/* Corporate Catering nested */}
                    <button
                      className={styles.accordionNestedToggle}
                      onClick={() => setCorporateAccOpen(!corporateAccOpen)}
                    >
                      Corporate Catering
                      <span className={`${styles.accordionArrow} ${corporateAccOpen ? styles.accordionArrowOpen : ''}`}>&#8964;</span>
                    </button>
                    {corporateAccOpen && (
                      <div className={styles.accordionNestedBody}>
                        <Link href={ROUTE_PATH.staff} className={styles.accordionItem}>Staff Catering</Link>
                        <Link href={ROUTE_PATH.business} className={styles.accordionItem}>Business Party Catering</Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              /* Desktop CATERING dropdown */
              <Dropdown className={styles.dropdownWrapper}>
                <Dropdown.Toggle as="a" className={styles.dropdownToggle}>
                  CATERING
                </Dropdown.Toggle>
                <Dropdown.Menu className={styles.dropdownMenu}>

                  {/* Private Catering → nested flyout */}
                  <Dropdown
                    drop="end"
                    className={styles.nestedDropdownWrapper}
                    onMouseEnter={() => setPrivateCateringOpen(true)}
                    onMouseLeave={() => setPrivateCateringOpen(false)}
                    show={privateCateringOpen}
                  >
                    <Dropdown.Toggle as="div" className={`${styles.dropdownItem} ${styles.nestedToggle}`}>
                      PRIVATE CATERING
                    </Dropdown.Toggle>
                    <Dropdown.Menu className={`${styles.dropdownMenu} ${styles.nestedDropdownMenu}`}>
                      <Dropdown.Item as={Link} href={ROUTE_PATH.wedding} className={styles.dropdownItem}>
                        Wedding Catering
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} href={ROUTE_PATH.birthday} className={styles.dropdownItem}>
                        Birthday Party Catering
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} href={ROUTE_PATH.yatch} className={styles.dropdownItem}>
                        Yacht Party Catering
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} href={ROUTE_PATH.special} className={styles.dropdownItem}>
                        Special Occasion Catering
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} href={ROUTE_PATH.kids} className={styles.dropdownItem}>
                        Kids Party Catering
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} href={ROUTE_PATH.getTogether} className={styles.dropdownItem}>
                        Get Together
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* Corporate Catering → nested flyout */}
                  <Dropdown
                    drop="end"
                    className={styles.nestedDropdownWrapper}
                    onMouseEnter={() => setCorporateCateringOpen(true)}
                    onMouseLeave={() => setCorporateCateringOpen(false)}
                    show={corporateCateringOpen}
                  >
                    <Dropdown.Toggle as="div" className={`${styles.dropdownItem} ${styles.nestedToggle}`}>
                      CORPORATE CATERING
                    </Dropdown.Toggle>
                    <Dropdown.Menu className={`${styles.dropdownMenu} ${styles.nestedDropdownMenu}`}>
                      <Dropdown.Item as={Link} href={ROUTE_PATH.staff} className={styles.dropdownItem}>
                        Staff Catering
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} href={ROUTE_PATH.business} className={styles.dropdownItem}>
                        Business Party Catering
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Menu>
              </Dropdown>
            )}

            <Link href={ROUTE_PATH.contact} className={styles.navLink}>CONTACT US</Link>
          </nav>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <Link href={ROUTE_PATH.contact} className={styles.reservationBtn}>
            Reservation
          </Link>
        </div>
      </div>
    </header>
  );
}