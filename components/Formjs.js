import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { Box, Button, ButtonGroup, Flex, Label, Text, TextField, Checkbox, Module, Heading } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import Nft from './Nft';


const MultistepForm = () => { 
const [step, setStep] = useState(1); 
const [email, setEmail] = useState(''); 
const [name, setName] = useState(''); 
  const [checkedSell, setCheckedSell] = useState(false);
  const [checkedLeads, setCheckedLeads] = useState(false);
  const [checkedAudience, setCheckedAudience] = useState(false);
  const [checkedBrand, setCheckedBrand] = useState(false);
  const [checkedNotSure, setCheckedNotSure] = useState(false);
const nextStep = () => { setStep(step + 1); 
};

const prevStep = () => { 
	setStep(step - 1); 
};

const handleSubmit = (e) => {
// Handle form submission here 
alert('Submitted');
};

// solana wallet


return ( 
<form onSubmit={handleSubmit}> 
<Flex direction="column" gap={{ column: 1, row: 0 }} maxWidth={450} flex="grow">
<Module id="ModularForm">
    {step === 1 && ( 
	<> 
	<Flex height="100%" justifyContent="center" alignItems="center" gap={1}>
	<Heading size="500">
          Welcome!
        </Heading>
        </Flex>
        <Flex height="100%" justifyContent="center" alignItems="center" gap={1}>
       <p>Connect your wallet please</p>
        </Flex>
	</> 
	)} 
	{step === 2 && ( 
		<> 
		<Flex height="100%" justifyContent="center" alignItems="center" gap={10}>
		<Heading size="500">
          What's your name anon?
        </Heading>
        </Flex>
		<TextField
            id="name"
            onChange={({ value }) => setName(value)}
            placeholder="First and last name"
            label="Name"
            value={name}
          />
	</> 
	)} 
	{step === 3 && ( 
		<> 
		<Flex height="100%" justifyContent="center" alignItems="center" gap={1}>
		<Heading size="500">
          What's your favourite music genres? <br />
        </Heading>
        </Flex>
        <Flex direction="column" gap={{ column: 4, row: 0 }}>
            <Checkbox
              checked={checkedSell}
              id="sell"
              label="Hip-hop"
              name="account goals"
              onChange={({ checked }) => {
                setCheckedSell(checked);
              }}
            />
            <Checkbox
              checked={checkedLeads}
              id="leads"
              label="R&B"
              name="account goals"
              onChange={({ checked }) => {
                setCheckedLeads(checked);
              }}
            />
            <Checkbox
              checked={checkedAudience}
              id="audience"
              label="Rock"
              name="account goals"
              onChange={({ checked }) => {
                setCheckedAudience(checked);
              }}
            />
            <Checkbox
              checked={checkedBrand}
              id="brand"
              label="Indie Pop"
              name="account goals"
              onChange={({ checked }) => {
                setCheckedBrand(checked);
              }}
            />
            <Checkbox
              checked={checkedNotSure}
              id="notSure"
              label="Not sure yet"
              name="account goals"
              onChange={({ checked }) => {
                setCheckedNotSure(checked);
              }}
            />
          </Flex>
       	</> 
)} 
<div> 
<Flex height="100%" justifyContent="center" alignItems="center" gap={1}>
<ButtonGroup>
{step === 1 && <Nft />}
{step > 1 && <Button text="Previous" onClick={prevStep}/>} 
{step < 3 && <Button text="Next" onClick={nextStep}/>} 
{step === 3 && <Button text="Mint pass" type="submit" color="red" />} 
</ButtonGroup>
</Flex>
</div> 
</Module>
</Flex>
</form> 
); 
};

export default MultistepForm;
