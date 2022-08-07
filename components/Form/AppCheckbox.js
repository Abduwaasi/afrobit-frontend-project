import { useField } from "formik";
const AppCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div style={{ marginTop: "16px" }}>
      <input
        type="checkbox"
        {...field}
        {...props}
        style={{
          outline: "1px solid #f9c65c",
          background: "#363636",
          marginRight: "9px",
        }}
      />
      {children}

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default AppCheckbox;
