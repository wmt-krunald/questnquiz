import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const VerticalFeatures = () => (
  <Section title="About Us" description="">
    <VerticalFeatureRow
      title="Sign Up"
      description="App provides with simple sign up process that will give user history of their past taken quizes and searh history of questions.

      "
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Quiz"
      description="Select catergory, number of questions and difficulty level to find the quiz as per the choice."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Quest"
      description="Select catergory, number of questions and difficulty level to find the quiz as per the choice."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
