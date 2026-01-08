import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import conf from "../conf/conf";

function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block font-semibold mb-1 pl-1">{label}</label>
      )}

      <div className="relative">
        <Controller
          name={name || "Content"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              apiKey={conf.tinymceKey}
              initialValue={defaultValue}
              init={{
                menubar: true,
                branding: false,
                height: 400,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "charmap",
                  "preview",
                  "searchreplace",
                  "visualblocks",
                  "fullscreen",
                  "insertdatetime",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                  "anchor",
                ],
                toolbar:
                  "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
              }}
              onEditorChange={onChange}
            />
          )}
        />

        {/* Word count indicator */}
        <div className="mt-2 text-xs text-slate-500 flex justify-between items-center">
          <span>Use the toolbar above to format your content</span>
          <span className="font-medium">Rich Text Editor</span>
        </div>
      </div>
    </div>
  );
}

export default RTE;
