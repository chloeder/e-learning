import { Modal } from "@/components/ui/modal";
import { IconTrashEmpty } from "justd-icons";

export function DeleteButton() {
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
                    <Modal.Close appearance="solid" intent="danger">
                        Continue
                    </Modal.Close>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    );
}
