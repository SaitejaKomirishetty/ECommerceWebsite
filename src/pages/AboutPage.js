import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
    return (
        <main>
            <PageHero title="about" />
            <Wrapper classNmae="paper section section-center">
                <img src={aboutImg} alt="nice desk" />
                <article>
                    <div className="title">
                        <h2>Our Story</h2>
                        <div className="underline"></div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Saepe quae, quaerat inventore voluptatem laborum
                        soluta quisquam explicabo eligendi eius. Temporibus
                        libero reiciendis aspernatur quae nihil corrupti
                        mollitia? Necessitatibus, nam inventore! Veniam saepe
                        sapiente, temporibus laudantium ea odio suscipit vel.
                        Temporibus odio inventore iure rerum libero mollitia
                        saepe optio voluptas, explicabo est officia dolore
                        nesciunt soluta neque, hic facilis, beatae id? Minus
                        repellat accusantium veritatis iusto hic pariatur nobis
                        cumque dolor praesentium odit. Sapiente quod impedit,
                        recusandae porro at, eaque aperiam amet nobis, illum
                        inventore dolores sequi. Libero repellendus unde omnis!0
                    </p>
                </article>
            </Wrapper>
        </main>
    );
};

const Wrapper = styled.section`
    display: grid;
    gap: 4rem;
    img{
        width: 100%;
        display: block;
        border-radius: 60px;
        height: 500px;
        padding: 50px;
        object-fit: cover;
    }
    p {
        line-height: 2;
        max-width: 45em;
        margin: 0 auto;
        margin-top: 2rem;
        color: var(--clr-grey-5);
    }
    .title {
        text-align: left;
    }
    .underline {
        margin-left: 0;
    }
    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
`;
export default AboutPage;
