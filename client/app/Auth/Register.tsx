import React from "react";
import {StyleSheet} from "react-native";
import {View, Text, TextInput, Button} from "react-native";
import {loginColors} from "../../styles/colors";
import {Formik} from "formik";
import * as Yup from 'yup';
import Auth from "./Auth";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../store/actions";
import {IRegisterValues, IError, IProps, IStore} from "../../interfaces/interfaces";
import {Error} from "../../styles/styles";

const SignupSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Name is required'),
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: Yup.string().max(255).required('Password is required')
});

const Register: React.FC<IProps> = ({navigation}) => {
    const initialValues: IRegisterValues = {name: '', email: '', password: ''};
    const dispatch = useDispatch();
    const error: IError = useSelector((store: IStore) => store.error);
    console.log("error", error)

    const submitHandler = (values: IRegisterValues) => {
        dispatch(register({
            name: values.name,
            email: values.email,
            password: values.password,
        }));
    }

    return (
        <Auth type="Register" navigation={navigation}>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={values => submitHandler(values)}
            >
                {({errors, touched, handleChange, handleBlur, handleSubmit, values}) => (
                    <>
                        {error && error.type === 'register' && <Text>{error.message}</Text>}
                        <View>
                            {errors.name && touched.name ? (
                                <Error>{errors.name}</Error>
                            ) : null}
                            <Text style={styles.label}>Name</Text>
                            <TextInput style={styles.input} placeholder="Stepanov Stepan"
                                       onChangeText={handleChange('name')}/>
                        </View>

                        <View>
                            {errors.email && touched.email ? (
                                <Error>{errors.email}</Error>
                            ) : null}
                            <Text style={styles.label}>Email</Text>
                            <TextInput style={styles.input} placeholder="email@example.com"
                                       onChangeText={handleChange('email')}/>
                        </View>

                        <View>
                            {errors.password && touched.password ? (
                                <Error>{errors.password}</Error>
                            ) : null}
                            <Text style={styles.label}>Password</Text>
                            <TextInput style={styles.input} placeholder="**********" secureTextEntry={true}
                                       onChangeText={handleChange('password')}/>
                        </View>
                        <Button
                            title="Register"
                            color={loginColors["login-btn"]}
                            onPress={() => handleSubmit()}
                        />
                    </>)}
            </Formik>
        </Auth>
    );
};

const styles = StyleSheet.create({
    label: {
        paddingBottom: 5,
        fontSize: 20
    },
    input: {
        fontSize: 15,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 20
    },
});

export default Register;
