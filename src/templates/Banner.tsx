import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Get the rest to your quest."
      subtitle=""
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button>Download App</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
