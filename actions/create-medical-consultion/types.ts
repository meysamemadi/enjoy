import { z } from "zod";

import { ActionState } from "@/lib/create-safe-action";

import { CreateMedicalConsultation } from "./schema";
import { FreeConsultation } from "@/types";


export type InputType = z.infer<typeof CreateMedicalConsultation>;
export type ReturnType = ActionState<InputType, FreeConsultation>;
