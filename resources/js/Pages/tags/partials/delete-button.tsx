import { Modal } from "@/components/ui/modal";
import { Tags } from "@/types";
import { useForm } from "@inertiajs/react";
import { IconTrashEmpty } from "justd-icons";
import { toast } from "sonner";

export function DeleteButton({ tags }: { tags: Tags[] }) {
    const { delete: destroy } = useForm();

    const handleDelete = () => {
        destroy(route("tags.destroy", tags), {
            onSuccess: () => {
                toast.error("Tags has been deleted!", {
                    position: "top-center",
                });
            },
        });
    };

    return (
        <Modal>
            <Modal.Trigger>
                <IconTrashEmpty className="text-red-500 w-5" />
            </Modal.Trigger>
            <Modal.Content role="alertdialog" isBlurred>
                <Modal.Header>
                    <Modal.Title>Delete file</Modal.Title>
                    <Modal.Description>
                        This will permanently delete the selected file.
                        Continue?
                    </Modal.Description>
                </Modal.Header>
                <Modal.Footer>
                    <Modal.Close appearance="outline">Cancel</Modal.Close>
                    <button
                        className="px-2 bg-red-500 rounded-lg text-white"
                        onClick={handleDelete}
                    >
                        Continue
                    </button>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    );
}
