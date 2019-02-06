import React from 'react';
import { Form, Button, Container } from 'semantic-ui-react';
import { Field, reduxForm } from "redux-form";
import { LabelInputField, TextAreaField } from "react-semantic-redux-form";

class CreatePost extends React.Component {

    createOrder = values => {
        this.props.addPost(values);
        this.props.reset();
        this.props.switchPage('Home');
        this.props.history.push('/');
    }


    render() {
        return (
            <Container text>
                <Form widths='equal' onSubmit={this.props.handleSubmit(this.createOrder)}>

                    <label>Заголовок:</label>
                    <Field name='title' type="text" required
                           component={LabelInputField}
                    />
                    <label>Точное имя картинки (image1.jpg):</label>
                    <Field name="image" type="text"
                           component={LabelInputField}
                    />
                    <Field name="text" type="text" required
                           component={TextAreaField}
                           label='Текст:'
                    />
                    <Button type="submit" {...this.props.siteColor}>Создать</Button>
                </Form>
            </Container>
        );
    }
}

export default reduxForm({
    form: 'newPost',
})(CreatePost);