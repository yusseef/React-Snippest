import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'
export function FooterContainer(){

    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About us</Footer.Title>
                    <Footer.Link href="#">About 1</Footer.Link>
                    <Footer.Link href="#">About 2</Footer.Link>
                    <Footer.Link href="#">About 3</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Service 1</Footer.Link>
                    <Footer.Link href="#">Service 2</Footer.Link>
                    <Footer.Link href="#">Service 3</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact us</Footer.Title>
                    <Footer.Link href="#">Contact 1</Footer.Link>
                    <Footer.Link href="#">Contact 2</Footer.Link>
                    <Footer.Link href="#">Contact 3</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social media</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f"/></Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram"/></Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube"/></Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter"/></Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
        )
}