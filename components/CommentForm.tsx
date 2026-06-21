import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./common/Button";
import { addComment } from "@/utils/comments";

interface CommentFormProps {
  movieId: string;
  onCommentAdded: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({
  movieId,
  onCommentAdded,
}) => {
  const { t } = useTranslation();
  const [sender, setSender] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sender.trim() || !text.trim()) return;
    setLoading(true);
    try {
      await addComment(movieId, sender.trim(), text.trim());
      setSender("");
      setText("");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      onCommentAdded();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 rounded-xl bg-surface p-4"
    >
      <p className="font-EstedadFont text-white/70">{t("leaveAComment")}</p>
      <input
        value={sender}
        onChange={(e) => setSender(e.target.value)}
        placeholder={t("yourName")}
        maxLength={50}
        className="w-full rounded-lg bg-surface2 p-3 text-white outline-none placeholder:text-white/30 focus:ring-1 focus:ring-primary"
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={t("yourComment")}
        rows={3}
        maxLength={500}
        className="w-full resize-none rounded-lg bg-surface2 p-3 text-white outline-none placeholder:text-white/30 focus:ring-1 focus:ring-primary"
      />
      <div className="flex items-center gap-4">
        <Button
          type="primary"
          htmlType="submit"
          isLoading={loading}
          isDisabled={!sender.trim() || !text.trim()}
        >
          {t("submitComment")}
        </Button>
        {success && (
          <p className="text-sm text-green-400">{t("commentAdded")}</p>
        )}
      </div>
    </form>
  );
};

export default CommentForm;
