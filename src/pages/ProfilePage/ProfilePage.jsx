import React from "react";
import SingleSelect from "../../components/UI/SingleSelect/SingleSelect";
import selectSpezialist from "../../constants/selectSpezialist.json";
import selectdocument from "../../constants/selectdocument.json";
import InputForm from "../../components/UI/InputForm/InputForm";
import TextAreaForm from "../../components/UI/TextAreaForm/TextAreaForm";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import CheckBoxForm from "../../components/UI/CheckBoxForm/CheckBoxForm";
import RadioForm from "../../components/UI/RadioForm/RadioForm";
import ButtonBlue from "../../components/UI/ButtonBlue/ButtonBlue";
import Navigation from "../../components/Navigation/Navigation";
import "./ProfilePage.css";
import { EMAIL_REGULAR, PHONE_REGULAR } from "../../constants/regulars";

const ProfilePage = () => {
  const initialValues = {
    name: "",
    city: "Название города",
    specialization: "layoutDesigner",
    document: "choosen",
    about: "",
    workPhone: "",
    workStraight: "",
    mobile: "",
    fax: "",
    home: "",
    emailWork: "",
    emailPrivate: "",
    likeCheckBoxDisabled: true,
    hateCheckBoxDisabled: false,
    likeCheckBox: true,
    hateCheckBox: false,
    radioDisabled: "Неактивна, выбрана",
    radio: "Я люблю радио-кнопки",
    comment: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Слишком короткое")
      .max(55, "Слишком длинное")
      .required("Напишите ФИО"),

    specialization: Yup.string().notOneOf(
      ["choosent"],
      "Выберите специализацию"
    ),

    document: Yup.string().notOneOf(["choosent"], "Выберите документ"),

    about: Yup.string().required("Напишите что нибудь о себе"),

    workPhone: Yup.string()
      .required("Напишите свой рабочий телефон")
      .matches(PHONE_REGULAR, "Неверный формат номера"),

    workStraight: Yup.string()
      .required("Напишите свой рабочий прямой телефон")
      .matches(PHONE_REGULAR, "Неверный формат номера"),

    mobile: Yup.string()
      .required("Напишите свой мобильный телефон")
      .matches(PHONE_REGULAR, "Неверный формат номера"),

    fax: Yup.string()
      .required("Напишите свой факс")
      .matches(PHONE_REGULAR, "Неверный формат номера"),

    home: Yup.string()
      .required("Напишите свой домашний телефон")
      .matches(PHONE_REGULAR, "Неверный формат номера"),

    emailWork: Yup.string()
      .required("Напишите свой рабочий email")
      .matches(EMAIL_REGULAR, "Неверный формат почты"),

    emailPrivate: Yup.string()
      .required("Напишите свой личный email")
      .matches(EMAIL_REGULAR, "Неверный формат почты"),

    comment: Yup.string().required("Напишите комментарий"),
  });
  return (
    <div className="profile">
      <Navigation />
      <div className="profile-form-card">
        <h1 className="profile__title">Редактировать профиль</h1>
        <div className="profile__card profile-card">
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
            validationSchema={validationSchema}
          >
            {({
              errors,
              touched,
              resetForm,
              initialValues,
              handleBlur,
              values,
              setFieldValue,
              setFieldTouched,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <div className="profile-card__form profile-card-form">
                  <h2 className="profile-card-form__title">Общее</h2>
                  <div className="profile-forms">
                    <div className="profile-forms-item">
                      <label className="profile-forms-item__name">ФИО</label>
                      <InputForm
                        type="text"
                        name="name"
                        error={touched.name ? errors.name : null}
                        onChange={(e) => setFieldValue("name", e.target.value)}
                        onBlur={handleBlur}
                        placeholder="Иванов Иван Иванович"
                        disabled={false}
                        value={values["name"]}
                      />
                    </div>
                    <div className="profile-forms-item">
                      <label className="profile-forms-item__name">
                        Специализация
                      </label>
                      <div className="profile-forms-item__select">
                        <SingleSelect
                          name="specialization"
                          items={selectSpezialist}
                          onChange={(option) =>
                            setFieldValue("specialization", option.value)
                          }
                          onBlur={handleBlur}
                          error={
                            touched.specialization
                              ? errors.specialization
                              : null
                          }
                        />
                      </div>
                    </div>
                    <div className="profile-forms-item">
                      <label className="profile-forms-item__name">
                        Документ
                      </label>
                      <div className="profile-forms-item__select">
                        <SingleSelect
                          name="document"
                          items={selectdocument}
                          onChange={(option) =>
                            setFieldValue("document", option.value)
                          }
                          onBlur={handleBlur}
                          error={touched.document ? errors.document : null}
                        />
                      </div>
                    </div>
                    <div className="profile-forms-item">
                      <label className="profile-forms-item__name profile-forms-item__name_disabled">
                        Город
                      </label>
                      <InputForm
                        name="city"
                        type="text"
                        placeholder="Название города"
                        disabled={true}
                      />
                    </div>
                    <div className="profile-forms-item">
                      <label className="profile-forms-item__name">О себе</label>
                      <TextAreaForm
                        name="about"
                        error={touched.about ? errors.about : null}
                        onChange={(e) => setFieldValue("about", e.target.value)}
                        onBlur={handleBlur}
                        value={values["about"]}
                      />
                    </div>
                  </div>
                </div>
                <div className="profile-card__form profile-card-form">
                  <h2 className="profile-card-form__title">Контакты</h2>
                  <div className="profile-forms">
                    <div className="profile-forms-item">
                      <label className="profile-forms-item__name">
                        Раб. тел.
                      </label>
                      <InputForm
                        onChange={(e) =>
                          setFieldValue("workPhone", e.target.value)
                        }
                        onBlur={handleBlur}
                        name="workPhone"
                        mask={true}
                        disabled={false}
                        value={values["workPhone"]}
                        error={touched.workPhone ? errors.workPhone : null}
                      />
                    </div>
                    <div className="profile-forms-item">
                      <label className="profile-forms-item__name">
                        Раб. прямой
                      </label>
                      <InputForm
                        placeholder="+7"
                        onChange={(e) =>
                          setFieldValue("workStraight", e.target.value)
                        }
                        onBlur={handleBlur}
                        name="workStraight"
                        mask={true}
                        disabled={false}
                        value={values["workStraight"]}
                        error={
                          touched.workStraight ? errors.workStraight : null
                        }
                      />
                    </div>
                    <div className="profile-forms-item">
                      <label className="profile-forms-item__name">
                        Мобильный
                      </label>
                      <InputForm
                        placeholder="+7"
                        onChange={(e) =>
                          setFieldValue("mobile", e.target.value)
                        }
                        onBlur={handleBlur}
                        name="mobile"
                        mask={true}
                        disabled={false}
                        value={values["mobile"]}
                        error={touched.mobile ? errors.mobile : null}
                      />
                    </div>
                    <div className="profile-forms-item">
                      <label className="profile-forms-item__name">Факс</label>
                      <InputForm
                        onChange={(e) => setFieldValue("fax", e.target.value)}
                        onBlur={handleBlur}
                        name="fax"
                        mask={true}
                        disabled={false}
                        value={values["fax"]}
                        error={touched.fax ? errors.fax : null}
                      />
                    </div>
                    <div className="profile-forms-item">
                      <label className="profile-forms-item__name">
                        Домашний
                      </label>
                      <InputForm
                        onChange={(e) => setFieldValue("home", e.target.value)}
                        onBlur={handleBlur}
                        name="home"
                        mask={true}
                        disabled={false}
                        value={values["home"]}
                        type="email"
                        error={touched.home ? errors.home : null}
                      />
                    </div>
                    <div className="profile-forms-item">
                      <label className="profile-forms-item__name">
                        Email раб.
                      </label>
                      <InputForm
                        onChange={(e) =>
                          setFieldValue("emailWork", e.target.value)
                        }
                        error={touched.emailWork ? errors.emailWork : null}
                        onBlur={handleBlur}
                        name="emailWork"
                        disabled={false}
                        value={values["emailWork"]}
                        type="email"
                      />
                    </div>
                    <div className="profile-forms-item">
                      <label className="profile-forms-item__name">
                        Email личн.
                      </label>
                      <InputForm
                        error={
                          touched.emailPrivate ? errors.emailPrivate : null
                        }
                        onChange={(e) =>
                          setFieldValue("emailPrivate", e.target.value)
                        }
                        onBlur={handleBlur}
                        name="emailPrivate"
                        disabled={false}
                        value={values["emailPrivate"]}
                      />
                    </div>
                  </div>
                </div>
                <div className="profile-card__form profile-card-form">
                  <h2 className="profile-card-form__title">
                    Мое мнение о чекбоксах
                  </h2>
                  <div className="profile-forms">
                    <CheckBoxForm
                      name="likeCheckBoxDisabled"
                      label="Неактивен, выбран"
                      value={values["likeCheckBoxDisabled"]}
                      disabled
                    />
                    <CheckBoxForm
                      name="hateCheckBoxDisabled"
                      label="Неактивен, не выбран"
                      value={values["hateCheckBoxDisabled"]}
                      disabled
                    />
                    <CheckBoxForm
                      name="likeCheckBox"
                      label="Я люблю чекбоксы"
                      value={values["likeCheckBox"]}
                      onChange={() =>
                        setFieldValue("likeCheckBox", !values["likeCheckBox"])
                      }
                    />
                    <CheckBoxForm
                      name="hateCheckBox"
                      label="Я ненавижу чекбоксы"
                      value={values["hateCheckBox"]}
                      onChange={() =>
                        setFieldValue("hateCheckBox", !values["hateCheckBox"])
                      }
                    />
                  </div>
                </div>
                <div className="profile-card__form profile-card-form">
                  <h2 className="profile-card-form__title">
                    Мое мнение о радио-кнопках
                  </h2>
                  <div className="profile-forms">
                    <RadioForm
                      disabled
                      name="radioDisabled"
                      options={["Неактивна, выбрана", "Неактивна, не выбрана"]}
                      value={values["radioDisabled"]}
                    />
                    <RadioForm
                      name="radio"
                      options={[
                        "Я люблю радио-кнопки",
                        "Я ненавижу радио-кнопки",
                      ]}
                      value={values["radio"]}
                      onChange={(option) => setFieldValue("radio", option)}
                    />
                    <div className="profile-forms-item">
                      <label className="profile-forms-item__name">
                        Комментарий
                      </label>
                      <TextAreaForm
                        name="comment"
                        error={touched.comment ? errors.comment : null}
                        onChange={(e) =>
                          setFieldValue("comment", e.target.value)
                        }
                        onBlur={handleBlur}
                        value={values["comment"]}
                      />
                    </div>
                  </div>
                </div>
                <div className="profile-form-buttons">
                  <div className="form-button__save">
                    <ButtonBlue className="button__save" type="submit">
                      Сохранить
                    </ButtonBlue>
                  </div>
                  <button
                    type="button"
                    className="form-button__cancel"
                    onClick={() => {
                      resetForm({ values: initialValues });
                    }}
                  >
                    Отмена
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
