import { ChangeEvent, FormEvent } from "react";

interface DataFormProps {
  defaultValue?: string | number | readonly string[];
  handleInput?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  handleCancel?: () => void;
}

export default function DataForm({ defaultValue, handleInput, handleSubmit, handleCancel }: DataFormProps) {
  return (
    <form className="py-1" onSubmit={handleSubmit}>
      <textarea
        name="data"
        className="px-3 py-2 w-full text-xs border border-neutral-300 rounded"
        placeholder="Input JSON here..."
        rows={6}
        defaultValue={defaultValue}
        onChange={handleInput}
      />

      <div className="py-1 flex justify-center gap-x-3">
        <button className="c-button c-button--green" type="submit">Submit</button>
        <button className="c-button c-button--red" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  )
}
