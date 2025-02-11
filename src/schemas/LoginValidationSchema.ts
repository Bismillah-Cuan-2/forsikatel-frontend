import * as Yup from "yup";

const validationSchema = Yup.object({
    fullName: Yup.string().min(3, "Nama lengkap harus memiliki setidaknya 3 karakter")
    .matches(/^[a-zA-Z\s]+$/, "Nama lengkap hanya boleh berisi huruf dan spasi")
    .required("Nama lengkap wajib diisi"),
    phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Nomor telepon hanya boleh berisi angka")
    .min(10, "Nomor telepon harus memiliki setidaknya 10 digit")
    .max(15, "Nomor telepon tidak boleh lebih dari 15 digit")
    .required("Nomor telepon wajib diisi")
});

export default validationSchema;