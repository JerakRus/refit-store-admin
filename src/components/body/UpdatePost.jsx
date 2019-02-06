import React from 'react';
import { Form, Button, Container } from 'semantic-ui-react';
import { Field, reduxForm } from "redux-form";
import { LabelInputField, TextAreaField } from "react-semantic-redux-form";

class UpdatePost extends React.Component {

    updatePost = values => {
        this.props.updatePost(values);
        this.props.reset();
        this.props.history.push('/');
    }


    render() {
        return (
            <Container text>
                <Form widths='equal' onSubmit={this.props.handleSubmit(this.updatePost)}>

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
                    <Button type="submit" {...this.props.siteColor}>Сохранить</Button>
                </Form>
            </Container>
        );
    }
}

export default reduxForm({
    form: 'updatedPost',
})(UpdatePost);