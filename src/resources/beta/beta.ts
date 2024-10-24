// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AssistantsAPI from './assistants';
import * as ThreadsAPI from './threads/threads';
import * as VectorStoresAPI from './vector-stores/vector-stores';

export class Beta extends APIResource {
  vectorStores: VectorStoresAPI.VectorStores = new VectorStoresAPI.VectorStores(this._client);
  assistants: AssistantsAPI.Assistants = new AssistantsAPI.Assistants(this._client);
  threads: ThreadsAPI.Threads = new ThreadsAPI.Threads(this._client);
}

export namespace Beta {
  export import VectorStores = VectorStoresAPI.VectorStores;
  export import AutoFileChunkingStrategyParam = VectorStoresAPI.AutoFileChunkingStrategyParam;
  export import FileChunkingStrategy = VectorStoresAPI.FileChunkingStrategy;
  export import FileChunkingStrategyParam = VectorStoresAPI.FileChunkingStrategyParam;
  export import OtherFileChunkingStrategyObject = VectorStoresAPI.OtherFileChunkingStrategyObject;
  export import StaticFileChunkingStrategy = VectorStoresAPI.StaticFileChunkingStrategy;
  export import StaticFileChunkingStrategyObject = VectorStoresAPI.StaticFileChunkingStrategyObject;
  export import StaticFileChunkingStrategyParam = VectorStoresAPI.StaticFileChunkingStrategyParam;
  export import VectorStore = VectorStoresAPI.VectorStore;
  export import VectorStoreDeleted = VectorStoresAPI.VectorStoreDeleted;
  export import VectorStoresPage = VectorStoresAPI.VectorStoresPage;
  export import VectorStoreCreateParams = VectorStoresAPI.VectorStoreCreateParams;
  export import VectorStoreUpdateParams = VectorStoresAPI.VectorStoreUpdateParams;
  export import VectorStoreListParams = VectorStoresAPI.VectorStoreListParams;
  export import Assistants = AssistantsAPI.Assistants;
  export import Assistant = AssistantsAPI.Assistant;
  export import AssistantDeleted = AssistantsAPI.AssistantDeleted;
  export import AssistantStreamEvent = AssistantsAPI.AssistantStreamEvent;
  export import AssistantTool = AssistantsAPI.AssistantTool;
  export import CodeInterpreterTool = AssistantsAPI.CodeInterpreterTool;
  export import FileSearchTool = AssistantsAPI.FileSearchTool;
  export import FunctionTool = AssistantsAPI.FunctionTool;
  export import MessageStreamEvent = AssistantsAPI.MessageStreamEvent;
  export import RunStepStreamEvent = AssistantsAPI.RunStepStreamEvent;
  export import RunStreamEvent = AssistantsAPI.RunStreamEvent;
  export import ThreadStreamEvent = AssistantsAPI.ThreadStreamEvent;
  export import AssistantsPage = AssistantsAPI.AssistantsPage;
  export import AssistantCreateParams = AssistantsAPI.AssistantCreateParams;
  export import AssistantUpdateParams = AssistantsAPI.AssistantUpdateParams;
  export import AssistantListParams = AssistantsAPI.AssistantListParams;
  export import Threads = ThreadsAPI.Threads;
  export import AssistantResponseFormatOption = ThreadsAPI.AssistantResponseFormatOption;
  export import AssistantToolChoice = ThreadsAPI.AssistantToolChoice;
  export import AssistantToolChoiceFunction = ThreadsAPI.AssistantToolChoiceFunction;
  export import AssistantToolChoiceOption = ThreadsAPI.AssistantToolChoiceOption;
  export import Thread = ThreadsAPI.Thread;
  export import ThreadDeleted = ThreadsAPI.ThreadDeleted;
  export import ThreadCreateParams = ThreadsAPI.ThreadCreateParams;
  export import ThreadUpdateParams = ThreadsAPI.ThreadUpdateParams;
  export import ThreadCreateAndRunParams = ThreadsAPI.ThreadCreateAndRunParams;
  export import ThreadCreateAndRunParamsNonStreaming = ThreadsAPI.ThreadCreateAndRunParamsNonStreaming;
  export import ThreadCreateAndRunParamsStreaming = ThreadsAPI.ThreadCreateAndRunParamsStreaming;
}
