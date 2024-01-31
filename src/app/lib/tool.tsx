import React from "react";

type ConfirmWindowProps = {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export const ConfirmWindow = ({
  isOpen,
  onCancel,
  onConfirm,
}: ConfirmWindowProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-md">
        <p className="mb-4">确定要执行此操作吗？</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          type="button"
          onClick={onConfirm}
        >
          确定
        </button>
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
            type="button"
            onClick={onCancel}
          >
            取消
          </button>
        </div>
      </div>
    </div>
  );
};
