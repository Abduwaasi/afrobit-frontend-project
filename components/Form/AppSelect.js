import { useField } from "formik";
const AppSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        {...field}
        {...props}
        style={{
          outline: 0,
          background: "transparent",

          width: "100%",
          height: "100%",
          color: "#fff",
          border: 0,
          marginRight: "20px",
          borderColor: "transparent",
          borderWidth: 0,
          outlineColor: "transparent",
        }}
      />
      {meta.touched && meta.error ? (
        <div className={StyleSheet.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default AppSelect;
