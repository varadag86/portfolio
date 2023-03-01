import React from "react";
import Layout from "../layout/layout.component";


const Blogs = () => {


    return (
        <div>
            <Layout>
                <div className="my-5 pt-5">
                    <h1 className="is-size-3">Blogs</h1>
                </div>
                <div className="ml-4">
                    <ul>
                        <li style={{
                            background: '#FAFAFA',
                            margin: '8px',
                            padding: '12px',
                            borderRadius: '8px'
                        }}>
                            <p className="mb-4 is-size-5">Springboot Gradle Project</p>
                            <p className="m-4 is-size-6">The springboot base gradle project is a simple gradle project with boilerplates included. This code base involves standard code elements while building a springboot microserivices and best practices suggested. It will not include database configurations or a integration code such as connectors for kafka or with cloud services.</p>
                            <div className="columns">
                                <div className="column">
                                    <p className="m-4"><strong>Read Me:</strong> <a href="https://varadag86.github.io/spring-base-gradle/" target="_blank">Docs</a></p>
                                </div>
                                <div className="column is-flex is-justify-content-end">
                                    <p className="m-4"><strong>Repository:</strong> <a href="https://github.com/varadag86/spring-base-gradle" target="_blank">Repository</a></p>
                                </div>
                            </div>
                        </li>
                        <li style={{
                            background: '#FAFAFA',
                            margin: '8px',
                            padding: '12px',
                            borderRadius: '8px'
                        }}>
                            <p className="mb-4 is-size-5">Springboot Postgres App</p>
                            <p className="m-4 is-size-6">The springboot postgres app focus on setting up the base template for postgres with the dependencies needed to connect to the database. Apart from that it will have standard practies while build a postgres app with spring-data-jpa and reference test cases.</p>
                            <div className="columns">
                                <div className="column">
                                    <p className="m-4"><strong>Read Me:</strong> <a href="https://varadag86.github.io/spring-templates/" target="_blank">Docs.</a></p>
                                </div>
                                <div className="column is-flex is-justify-content-end">
                                    <p className="m-4"><strong>Repository:</strong> <a href="https://github.com/varadag86/spring-templates/tree/develop/springboot-gradle-postgres" target="_blank">Repository</a></p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Layout >
        </div >
    )
}

export default Blogs;