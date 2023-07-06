/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react"

import { gql, useQuery, useMutation } from "@apollo/client"
import {
	Alert,
	Button,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	HStack,
	Input,
	NumberInput,
	NumberInputField,
	Text,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react"


const GET_DATA = gql`
query MyQuery2 {
	backend_country(order_by: {country_name: asc}) {
	  country_name
	  country_code
	}  
}
`
type SetItemProps = {
	country_name: string;
	country_code: string;
	startContent?: JSX.Element;
	endContent?: JSX.Element;
	growth?: string | number;
	filter: string;
  };

function APICALL() {
	const { loading, error, data } = useQuery(GET_DATA, {pollInterval: 1000,})
	
	
	const [count, setCount] = useState(0) 
	
	// useEffect(() => console.log(data); setCountLength(current))


	useEffect(() => {    
		console.log(data);

	  }, [data]);

	 
	if (loading) return <h1>Loading...</h1>;
	if (error) return <pre>{JSON.stringify(error)}</pre>;
	if (!data) return null;
	

	
	return (
		<>

{ data ? data.backend_country.length  : null}
<br />
			<br />
		
{data ? (<> <Button> </Button> </>) : (<> <Button isLoading/> </>) }
		</>
	)
}
export default function TESTFILETEST() {
	return (
		<>
			<br />
			<br />
			<br />
			<h2>🚀 My first Apollo app 🚀</h2>
			<br />
			<APICALL />


			<br></br>


			
		</>
	)
}
