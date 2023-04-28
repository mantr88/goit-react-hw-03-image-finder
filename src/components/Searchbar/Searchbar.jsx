import { Formik } from "formik";
import { Header, Form, Field, FormButton } from "./Searchbar.styled";

export const Searchbar = ({ query }) => {
    return (
        <Header className="searchbar">
            <Formik
                className="form"
                initialValues={{query: ''}}
                onSubmit={(values, actions) => {
                    if (values.query === '') {
                        return
                    }
                    query(values.query);
                    actions.resetForm();
                }
            }
            >
                <Form>
                    <FormButton type="submit" className="button">
                    <span className="button-label">Search</span>
                    </FormButton>

                    <Field
                        name='query'
                    // className="input"
                    type="text"
                    // autocomplete="off"
                    // autofocus
                    placeholder="Search images and photos"
                        />
                </Form>
            </Formik>
        </Header>
    );
};