import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';

const Contacts = props => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>
          John Smith
        </Card.Header>
        <Card.Meta>
          Relation
        </Card.Meta>
        <Card.Description>
          Some note
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button animated>
          <Button.Content visible>Add Note</Button.Content>
          <Button.Content hidden>
            <Icon name="write" />
          </Button.Content>
        </Button>
      </Card.Content>
    </Card>
  </Card.Group>
);

export default Contacts;
