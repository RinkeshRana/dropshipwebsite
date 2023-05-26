import { useState } from "react";

function ProductOptions(props) {
  const { options } = props; // get the options prop

  const [option, setOption] = useState({});

  const handleOptionChange = (e) => {
    const { name, value } = e.target;
    if (option[name] === value) {
      setOption({ ...option, [name]: "" });
      return;
    }
    setOption({ ...option, [name]: value });
    console.log(option);
  };

  // const options = [
  //   {
  //     name: "Size",
  //     values: [
  //       {
  //         name: "S",
  //         subvalues: ["Red", "White"],
  //       },
  //       {
  //         name: "M",
  //         subvalues: ["Red", "White", "Black", "Blue"],
  //       },
  //       {
  //         name: "L",
  //         subvalues: ["Red", "White", "Black", "Blue", "Green"],
  //       },
  //       {
  //         name: "XL",
  //         subvalues: ["Red", "White", "Black", "Blue", "Green", "Yellow"],
  //       },
  //     ],
  //   },
  //   {
  //     name: "Material",
  //     values: ["Cotton", "Polyester", "Silk"],
  //   },
  //   {
  //     name: "Brand",
  //     values: ["Nike", "Adidas", "Puma"],
  //   },
  //   {
  //     name: "Age Group",
  //     values: [
  //       {
  //         name: "Adult",
  //         subvalues: ["Red", "White", "Black", "Blue"],
  //       },
  //       {
  //         name: "Kids",
  //         subvalues: ["Red", "Blue", "Green", "Yellow"],
  //       },
  //       {
  //         name: "Teen",
  //         subvalues: ["Green", "Yellow"],
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className="mt-3">
      {/* iterate over the keys of the options object */}
      {Object.keys(options).map((key, index) => {
        // console.log(options[key]);

        // check if the option contains subvalues
        if (typeof options[key].values[0] === "object") {
          return (
            <div>
              {/* iterate over all object's option */}

              <div className="mt-3">
                <h3 className="text-sm text-gray-600">{options[key].name}</h3>
                <div className="mt-1 flex space-x-5">
                  {options[key].values.map((value, index) => {
                    return (
                      <div className="flex flex-col space-y-2">
                        <button
                          key={value.name}
                          className={`p-2 rounded-md border border-gray-300 flex items-center justify-center ${
                            option[options[key].name] === value.name
                              ? "bg-black text-white"
                              : ""
                          }`}
                          name={options[key].name}
                          value={value.name}
                          onClick={handleOptionChange}
                        >
                          {value.name}
                        </button>
                      </div>
                    );
                  })}
                </div>
                {/* iterate suboptions */}
                {option[options[key].name] && (
                  <div className="mt-4">
                    <h3 className="text-sm text-gray-600">Color</h3>
                    <div className="mt-1 flex space-x-5">
                      {options[key].values
                        .filter(
                          (value) => value.name === option[options[key].name]
                        )
                        .map((value, index) => {
                          return value.subvalues.map((subvalue, index) => {
                            // now access this on state variable
                            // console.log(option[options[key].name]);
                            // now access its value on state variable
                            // console.log(option[options[key].name]);
                            // console.log(subvalue);
                            // console.log(value.name);
                            // now acess this on state variable
                            // console.log(option[value.name]);

                            return (
                              <div className="flex flex-col space-y-2">
                                <button
                                  key={subvalue}
                                  className={`p-2 rounded-md border border-gray-300 flex items-center justify-center ${
                                    option[value.name] === subvalue
                                      ? "bg-black text-white"
                                      : ""
                                  }`}
                                  name={value.name}
                                  value={subvalue}
                                  onClick={handleOptionChange}
                                >
                                  {subvalue}
                                </button>
                              </div>
                            );
                          });
                        })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        } else {
          // here the option doesn't contain subvalues
          return (
            <div className="mt-3">
              <h3 className="text-sm text-gray-600">{options[key].name}</h3>
              <div className="mt-1 flex space-x-5">
                {/* iterate over the values of each key */}
                {options[key].values.map((value, index) => {
                  return (
                    <div className="flex flex-col space-y-2">
                      <button
                        key={value}
                        className={`p-2 rounded-md border border-gray-300 flex items-center justify-center ${
                          option[options[key].name] === value
                            ? "bg-black text-white"
                            : ""
                        }`}
                        name={options[key].name}
                        value={value}
                        onClick={handleOptionChange}
                      >
                        {value}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ProductOptions;
