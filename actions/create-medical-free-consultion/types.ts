import { z } from "zod";

import { ActionState } from "@/lib/create-safe-action";

import { CreateMedicalFreeConsultation } from "./schema";
import { FreeConsultation } from "@/types";


export type InputType = z.infer<typeof CreateMedicalFreeConsultation>;
export type ReturnType = ActionState<InputType, FreeConsultation>;
