import React from 'react';
import { COUNTRIES } from '../constants';
import { Button, TextInput, Select } from '../Components';
import {
  ComponentWrapper,
  FormWrapper,
  ButtonWrapper,
} from './CreatPlayer.styled';

class CreatePlayer extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleCreatePlayer = this.handleCreatePlayer.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCreatePlayer() {
    const data = this.state;
    const datajson = JSON.stringify(data);
    console.log('🤘💀🔥🤘💀🔥', data, '🤘💀🔥🤘💀🔥');
    console.log('🤘💀🔥🤘💀🔥', datajson, '🤘💀🔥🤘💀🔥');
    fetch('http://localhost:3001/players', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => {
      return response.json();
    });
    // .then(data => {
    //   if (data) {
    //     fetchPlayersSuccess(data);
    //     return data;
    //   }
    //   throw new Error(data.message);
    // });
  }

  render() {
    return (
      <ComponentWrapper>
        <FormWrapper>
          <form>
            <TextInput
              inputId="player"
              labelText="Player Name"
              name="name"
              onChange={this.handleChange}
              placeholder="Brian Ridge"
              required
              type="text"
            />
            <Select
              label="Country"
              name="country"
              onChange={this.handleChange}
              options={COUNTRIES}
              required
              selectId="country"
            />
            <TextInput
              inputId="winnings"
              labelText="Winnings"
              onChange={this.handleChange}
              name="winnings"
              placeholder="1,000,000"
              required
              type="number"
            />
          </form>
        </FormWrapper>
        <ButtonWrapper>
          <Button
            buttonText="Add Player"
            name="createPlayerButton"
            onClick={this.handleCreatePlayer}
            type="submit"
          />
        </ButtonWrapper>
      </ComponentWrapper>
    );
  }
}

export default CreatePlayer;
