import { Card, Label, ListBox } from "@heroui/react";
import { Mail } from "lucide-react";

export default function EmailColumn() {
    return (
        <Card className="items-center justify-center gap-4 rounded-lg p-6">
            <h2 className="text-2xl mb-4">Email me directly,</h2>
            <div className="flex w-full md:block">
                <ListBox
                    aria-label="Social links"
                    className="w-full socials-listbox"
                    selectionMode="none"
                >
                    <ListBox.Item
                        id="email"
                        textValue="email"
                        href="mailto:tomyalda78@gmail.com"
                        className="px-4 py-3"
                    >
                        <Mail size={24} />
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col">
                                <Label>tomyalda78@gmail.com</Label>
                            </div>
                        </div>
                    </ListBox.Item>
                </ListBox>
            </div>
        </Card>
    );
}
