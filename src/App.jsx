import { Container } from 'components/ui';
import { Header } from 'components/ui';
import { Section } from 'components/ui';
import { ContactForm } from 'components/ContactForm';
import { ContactsList } from 'components/ContactsList';
import { Filter } from 'components/Filter';


export const App = () => {
return (
  <Container>
    <Header>Phonebook</Header>
    <Section>
      <ContactForm />
    </Section>
    <Section title={"Contacts"}>
      <Filter />
      <ContactsList />
    </Section>
  </Container>
  );
};
