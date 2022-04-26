import React from "react";
import {StyleSheet} from "react-native";
import {View, Text, TextInput, Button} from "react-native";
import {loginColors} from "../../styles/colors";
import {Error} from "../../styles/styles";
import Auth from "./Auth";
import {ILoginValues, IProps, IStore} from "../../interfaces/interfaces";
import {Formik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/actions";

const SignInSchema = Yup.object({
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: Yup.string().max(255).required('Password is required')
});

const Login: React.FC<IProps> = ({navigation}) => {
    const initialValues: ILoginValues = {email: '', password: ''};
    const dispatch = useDispatch();
    const store: IStore = useSelector((store: IStore) => store);

    const submitHandler = (values: ILoginValues) => {
        dispatch(login({
            email: values.email,
            password: values.password,
        }));
    }

    return (
        <Auth type="Login" navigation={navigation}>
            <Formik
                initialValues={initialValues}
                validationSchema={SignInSchema}
                onSubmit={values => submitHandler(values)}
            >
                {({errors, touched, handleChange, handleBlur, handleSubmit, values}) => (
                    <>
                        {store.error && store.error.type === 'login' && (
                            <Error>{store.error.message}</Error>
                        )}
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
                            title="Login"
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
        marginBottom: 20,

    },
});

export default Login;
