// import React, { useState, useEffect } from "react";

// interface ProfileData {
//   avatar: string;
//   name: string;
//   job: string;
//   phone: string;
//   location: string;
//   email: string;
//   age: number;
// }

// const Profile: React.FC = () => {
//   const [profile, setProfile] = useState<ProfileData[]>([]);
//   const [searchNation, setSearchNation] = useState<string>("");
//   const [user, setUser] = useState("");

//   useEffect(() => {
//     const getUserId = async () => {
//       try {
//         const response = await client.get(`http://127.0.0.1:8000/user/user`);
//         setUser(response.data.user.id);
//       } catch (err) {}
//     };

//     getUserId();
//   }, []);

//   useEffect(() => {
//     const getProfile = async () => {
//       try {
//         const res = await client.get("http://127.0.0.1:8000/employee/");
//         setProfile(res.data);
//       } catch (error) {
//         console.error("An error occurred while fetching company data:", error);
//       }
//     };

//     getProfile();
//   }, []);

//   return (
//     <div>hello</div>
//     // <section>
//     //   <nav className="container mx-auto py-10">
//     //     {profile && (
//     //       <div className="flex justify-start gap-10">
//     //         <img
//     //           className="w-32 h-32 rounded-full"
//     //           src={profile.avatar}
//     //           alt={profile.name}
//     //         />
//     //         <div className="w-full max-w-[40%]">
//     //           <h2 className="text-2xl font-semibold mb-5">{profile.name}</h2>
//     //           <h3 className="text-xl mb-5">{profile.job}</h3>
//     //           <div className="flex justify-between">
//     //             <div className="flex flex-col mb-5">
//     //               <div className="mb-5">
//     //                 <h3 className="uppercase font-semibold text-xl text-gray-300">
//     //                   số điện thoại
//     //                 </h3>
//     //                 <p className="text-xl">{profile.phone}</p>
//     //               </div>
//     //               <div>
//     //                 <h3 className="uppercase font-semibold text-xl text-gray-300">
//     //                   địa điểm
//     //                 </h3>
//     //                 <p className="text-xl">{profile.location}</p>
//     //               </div>
//     //               <div>
//     //                 <div className="flex gap-2 items-center"></div>
//     //               </div>
//     //             </div>
//     //             <div className="flex flex-col ">
//     //               <div className="flex gap-2 items-center">
//     //                 <h3 className="uppercase font-semibold text-xl text-gray-300">
//     //                   Email
//     //                 </h3>
//     //                 <svg
//     //                   data-testid="icon-svg"
//     //                   className="IconStyle__VerticalCenteredSvg-sc-x7d280-0 caeFAp"
//     //                   width="1em"
//     //                   height="1em"
//     //                   fill="#017EB7"
//     //                   viewBox="0 0 100 100"
//     //                 >
//     //                   <path d="M50 100C22.386 100 0 77.614 0 50S22.386 0 50 0s50 22.386 50 50-22.386 50-50 50zM38.823 63.644L23.206 48.038 18 53.329l20.823 20.809 44.878-44.846L78.406 24 38.823 63.644z"></path>
//     //                 </svg>
//     //               </div>
//     //               <p className="text-xl mb-5">{profile.email}</p>
//     //               <div>
//     //                 <div className="flex gap-2 items-center">
//     //                   <h3 className="uppercase font-semibold text-xl text-gray-300">
//     //                     Tuổi, Giới tính
//     //                   </h3>
//     //                 </div>
//     //                 <p className="text-xl ">{profile.age} tuổi</p>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     )}
//     //   </nav>
//     // </section>
//   );
// };

// export default Profile;
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface FormData {
  name: string;
  age: number;
  cv: File | null;
}

const CVUploader: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: 0,
    cv: null,
  });
  const [cvLink, setCVLink] = useState<string>("");

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCVChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedCV = event.target.files[0];
      setFormData({
        ...formData,
        cv: selectedCV,
      });
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { name, age, cv } = formData;

      if (!cv) {
        console.error("Please select a CV");
        return;
      }

      const formDataToSend = new FormData();
      formDataToSend.append("name", name);
      formDataToSend.append("age", age.toString());
      formDataToSend.append("cv", cv);

      const response = await axios.post("URL_CUA_API", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Upload successful", response.data);

      // Lưu trữ đường dẫn tới CV trên server và cập nhật state
      setCVLink(response.data.cvLink);
    } catch (error) {
      console.error("Error uploading data", error);
    }
  };

  return (
    <div>
      <h2>Upload CV</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="cv">CV:</label>
          <input type="file" id="cv" accept=".pdf" onChange={handleCVChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
      {/* Hiển thị nút "Xem CV" nếu đã có đường dẫn */}
      {cvLink && (
        <div>
          <a href={cvLink} target="_blank" rel="noopener noreferrer">
            Xem CV
          </a>
        </div>
      )}
    </div>
  );
};

export default CVUploader;
