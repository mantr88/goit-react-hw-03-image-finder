import { Formik } from "formik";
import PropTypes from 'prop-types';
import {BiSearch} from 'react-icons/bi'
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
                        <BiSearch />
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

Searchbar.propTypes = {
    query: PropTypes.func.isRequired,
};