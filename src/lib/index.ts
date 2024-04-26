import InputBasic from './components/inputs/simples/InputBasic.svelte';
import InputFloat from './components/inputs/floats/InputFloat.svelte';
import InputSelectFloat from './components/inputs/floats/InputSelectFloat.svelte';
import InputUnitSelectFloat from './components/inputs/floats/InputUnitSelectFloat.svelte';
import SeoGenerate from './components/seo/SEOGenerate.svelte';
import InputNatural from './components/inputs/simples/InputNatural.svelte';
import TextAreaSimple from './components/textareas/simples/TextAreaSimple.svelte';
import TextAreaNatural from './components/textareas/simples/TextAreaNatural.svelte';
import TextAreaFloat from './components/textareas/floats/TextAreaFloat.svelte';

import type { ItemSelect } from './domains/types/Select.type';
import type { GroupItemSelect } from './domains/types/Select.type';
import type { TextSize, ButtonSize, RoundedSize } from './domains/types/Sizes.type';
import type { AutoCompleteInput } from './domains/types/AutoComplete.type';

export type { ItemSelect, GroupItemSelect, RoundedSize, ButtonSize, TextSize, AutoCompleteInput };
export {
	SeoGenerate,
	InputBasic,
	InputFloat,
	InputSelectFloat,
	InputUnitSelectFloat,
	InputNatural,
	TextAreaSimple,
	TextAreaNatural,
	TextAreaFloat
};
