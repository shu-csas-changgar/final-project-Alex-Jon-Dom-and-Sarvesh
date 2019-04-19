import React from 'react'
import styled from 'styled-components';
import { Container } from 'react-bootstrap';


const Styles = styled.div`
        .navbar {
            background-color: #222;
            }
        .navbar-brand, .navbar-nav .nav-link, .form-label {
            color: #C0C0C0;
        &:hover {
            color: white;
        }
    }
        .form-inline > * {
            margin:5px 3px;
    }
    `


export const About = () => (
    <Container>
        <Styles>
            <h1><center>About Page</center></h1>
            <p>ABC Corp has grown from a small office, in a single location, to 1000 employees spread across multiple locations, including a few satellite offices throughout the U.S. During this period of growth, the number of IT equipment leased or purchased by the company has become increasingly difficult to track. </p>
            <p>Presently the company tracks this information on an Excel spreadsheet that is shared amongst different IT staff across multiple office locations. This has become very difficult to maintain as multiple copies of the spreadsheet have been made, which has resulted in fragmented, redundant, and sometimes inconsistent information. There is no single source of truth that accurately reflects the number of equipment in the company’s possession. This is affecting the company’s purchasing decisions as they have ordered too many or not ordered enough equipment, which has resulted in low inventory some items, and in addition resulted in assigning the same device to multiple meetings at the same time.
            ABC’s IT department would like to develop an application to track all IT equipment the company currently owns or leases. This includes </p>
            <ul>
                <li>Desktop computers</li>
                <li>Laptops</li>
                <li>Servers</li>
                <li>Printers</li>
                <li>Mobile devices (phone and tablets)</li>
                <li>Displays</li>
                <li>Smartrooms with smartboards, cameras, recorders, and virtual meeting software</li>
            </ul>

            <p>The department would like to:</p>
            <ul>
                <li>Track inventory on each item to know when new equipment should be ordered</li>
                <li>Know the location of each items (office location, floor, etc...)</li>
                <li>In the case of a desktop, laptop, phone and tablet devices, they would like to track which employee each has been assigned. The system would like to track each employee’s name, email, contact information and office location</li>
                <li>Handle assignments of special-purpose equipment, displays, and smartrooms. The first two groups will require tracking changing location as well as individual or group reserving the equipment; the smartroom of course does not move.</li>
                <li>For all equipment there should be an owner/contact person</li>
                <li>Track the vendor the equipment was purchased/leased from, along with expiration dates for leased items.</li>
            </ul>
            <p>The system should allow users to:</p>

            <ul>
                <li>Import existing data from Excel spreadsheets (CSV files) into the database.</li>
                <li>Add/Update/Deactivate/Search reservations.</li>
                <li>Add/Update/Deactivate/Search equipment.</li>
                <li>Add/Update/Deactivate/Search employees.</li>
                <li>Add/Update/Deactivate/Search vendors.</li>
            </ul>
        </Styles>
    </Container>
)