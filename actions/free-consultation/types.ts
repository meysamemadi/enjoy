import { z } from "zod";

import { ActionState } from "@/lib/create-safe-action";

import { CreateFreeConsultation } from "./schema";
import { FreeConsultation } from "@/types";


export type InputType = z.infer<typeof CreateFreeConsultation>;
export type ReturnType = ActionState<InputType, FreeConsultation>;
