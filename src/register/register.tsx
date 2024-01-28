import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Example() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    let url = "";
    if (userType === "GUEST"){
      url = "http://localhost:1323/auth/register-guest"
    }
    else if (userType === "HOST") {
      url = "http://localhost:1323/auth/register-host"
    }
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  const [userType, setUserType] = useState('GUEST');
  
  const handleChange = (event: { target: { value: any; }; }) => {
    setUserType(event.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <select className="form-select mt-2" value={userType} onChange={handleChange} aria-label="Default select example">
            <option value="GUEST" selected>Guest</option>
            <option value="HOST">Host</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                className="form-control"
                id="username"
                {...register("username")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                className="form-control"
                {...register("name", { required: true })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="surname" className="form-label">
                Surname
              </label>
              <input
                className="form-control"
                {...register("surname", { required: true })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                {...register("email", { required: true })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Place Of Living
              </label>
              <input
                className="form-control"
                {...register("place_of_living", { required: true })}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

