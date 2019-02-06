import React from 'react';
import { Form, Button, Container } from 'semantic-ui-react';
import { Field, reduxForm } from "redux-form";
import { LabelInputField, TextAreaField, SelectField } from "react-semantic-redux-form";
import _ from 'lodash';

class CreateItem extends React.Component {

    createOrder = values => {
        this.props.addItem(values);
        this.props.reset();
        this.props.switchPage('Shop');
        this.props.history.push('/shop');
    }


    render() {
        const selectOptions = [
            { key:_.uniqueId(), value: 'parts', text: 'Запчасть' },
            { key: _.uniqueId(), value: 'phones', text: 'Телефон' },
            { key: _.uniqueId(), value: 'numbers', text: 'Номер телефона' }
        ];
        return (
            <Container text>
                <Form widths='equal' onSubmit={this.props.handleSubmit(this.createOrder)}>
                    <label>Тип товара:</label>
                    <Field name='type' required
                           component={SelectField}
                           options={selectOptions}
                    />
                    <label>Название запчасти / Номер телефона:</label>
                    <Field name='title' type="text" required
                           component={LabelInputField}
                    />
                    <label>Производитель устройства / Оператор:</label>
                    <Field name="firm" type="text" required
                           component={LabelInputField}
                    />
                    <label>Модель устройства / для номера оставить пустым:</label>
                    <Field name="model" type="text"
                           component={LabelInputField}
                    />
                    <label>Цена в рублях:</label>
                    <Field name="price" type="number" required
                           component={LabelInputField}
                    />
                    <label>Точное имя картинки (image1.jpg) / для номера оставить пустым:</label>
                    <Field name="image" type="text"
                           component={LabelInputField}
                    />
                    <Field name="description" type="text" required
                           component={TextAreaField}
                           label='Описание товара:'
                    />
                    <Button type="submit" {...this.props.siteColor}>Создать</Button>
                </Form>
            </Container>
        );
    }
}

export default reduxForm({
    form: 'newItem',
})(CreateItem);