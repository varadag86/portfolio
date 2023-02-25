import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../layout/layout.component"
import PORTFOLIO_IMG from '../assets/portfolio.png';
import LINKEDIN from '../assets/linkedin-in.svg';
import INSTA from '../assets/instagram.svg';
import STACK from '../assets/stack-overflow.svg';



const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="is-fullheight">
        <div className="hero-body has-text-centered">
          <div className="container">
            <div className="is-flex is-vcentered">
              <div className="columns">
                <div className="column">
                  <div className="user__info has-text-left has-text-justified">
                    <div className="mt-4">
                      <p>Hello ! My name is <span data-tooltip="Tooltip Text">Varad</span>, and I'm a Bangalore based software developer. While I am not working I spend time on travelling, sketching and photography.</p>
                    </div>
                    <div className="mt-4">
                      <p>I am a fullstack developer with diverse skill set from HTML, CSS and Javascript on frontend. In the backend development I use Java with Springboot or Python with Flask.</p>
                    </div>

                    <div className="pt-4 mt-4">
                      <span className="mt-4 p-4"><img src={LINKEDIN} height={20} width={20} /></span>
                      <span className="mt-4 p-4"><img src={STACK} height={20} width={20} /></span>
                      <span className="mt-4 p-4"><img src={INSTA} height={20} width={20} /></span>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <img src={PORTFOLIO_IMG} className='is-pulled-right' />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div >
    </Layout >
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
