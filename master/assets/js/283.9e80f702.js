(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{830:function(e,a,t){"use strict";t.r(a);var r=t(33),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"be-配置项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#be-配置项"}},[e._v("#")]),e._v(" BE 配置项")]),e._v(" "),t("p",[e._v("该文档主要介绍 BE 的相关配置项。")]),e._v(" "),t("h2",{attrs:{id:"查看配置项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看配置项"}},[e._v("#")]),e._v(" 查看配置项")]),e._v(" "),t("p",[e._v("（TODO）")]),e._v(" "),t("h2",{attrs:{id:"设置配置项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置配置项"}},[e._v("#")]),e._v(" 设置配置项")]),e._v(" "),t("p",[e._v("（TODO）")]),e._v(" "),t("h2",{attrs:{id:"应用举例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用举例"}},[e._v("#")]),e._v(" 应用举例")]),e._v(" "),t("p",[e._v("（TODO）")]),e._v(" "),t("h2",{attrs:{id:"配置项列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置项列表"}},[e._v("#")]),e._v(" 配置项列表")]),e._v(" "),t("h3",{attrs:{id:"alter-tablet-worker-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alter-tablet-worker-count"}},[e._v("#")]),e._v(" "),t("code",[e._v("alter_tablet_worker_count")])]),e._v(" "),t("h3",{attrs:{id:"base-compaction-check-interval-seconds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base-compaction-check-interval-seconds"}},[e._v("#")]),e._v(" "),t("code",[e._v("base_compaction_check_interval_seconds")])]),e._v(" "),t("h3",{attrs:{id:"base-compaction-interval-seconds-since-last-operation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base-compaction-interval-seconds-since-last-operation"}},[e._v("#")]),e._v(" "),t("code",[e._v("base_compaction_interval_seconds_since_last_operation")])]),e._v(" "),t("h3",{attrs:{id:"base-compaction-num-cumulative-deltas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base-compaction-num-cumulative-deltas"}},[e._v("#")]),e._v(" "),t("code",[e._v("base_compaction_num_cumulative_deltas")])]),e._v(" "),t("h3",{attrs:{id:"base-compaction-num-threads-per-disk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base-compaction-num-threads-per-disk"}},[e._v("#")]),e._v(" "),t("code",[e._v("base_compaction_num_threads_per_disk")])]),e._v(" "),t("h3",{attrs:{id:"base-compaction-write-mbytes-per-sec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base-compaction-write-mbytes-per-sec"}},[e._v("#")]),e._v(" "),t("code",[e._v("base_compaction_write_mbytes_per_sec")])]),e._v(" "),t("h3",{attrs:{id:"base-cumulative-delta-ratio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base-cumulative-delta-ratio"}},[e._v("#")]),e._v(" "),t("code",[e._v("base_cumulative_delta_ratio")])]),e._v(" "),t("h3",{attrs:{id:"be-port"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#be-port"}},[e._v("#")]),e._v(" "),t("code",[e._v("be_port")])]),e._v(" "),t("h3",{attrs:{id:"be-service-threads"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#be-service-threads"}},[e._v("#")]),e._v(" "),t("code",[e._v("be_service_threads")])]),e._v(" "),t("h3",{attrs:{id:"brpc-max-body-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#brpc-max-body-size"}},[e._v("#")]),e._v(" "),t("code",[e._v("brpc_max_body_size")])]),e._v(" "),t("p",[e._v("这个配置主要用来修改 brpc 的参数 "),t("code",[e._v("max_body_size")]),e._v("。")]),e._v(" "),t("p",[e._v("有时查询失败，在 BE 日志中会出现 "),t("code",[e._v("body_size is too large")]),e._v(" 的错误信息。这可能发生在 SQL 模式为 multi distinct + 无 group by + 超过1T 数据量的情况下。这个错误表示 brpc 的包大小超过了配置值。此时可以通过调大该配置避免这个错误。")]),e._v(" "),t("p",[e._v("由于这是一个 brpc 的配置，用户也可以在运行中直接修改该参数。通过访问 "),t("code",[e._v("http://be_host:brpc_port/flags")]),e._v(" 修改。")]),e._v(" "),t("h3",{attrs:{id:"brpc-socket-max-unwritten-bytes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#brpc-socket-max-unwritten-bytes"}},[e._v("#")]),e._v(" "),t("code",[e._v("brpc_socket_max_unwritten_bytes")])]),e._v(" "),t("p",[e._v("这个配置主要用来修改 brpc  的参数 "),t("code",[e._v("socket_max_unwritten_bytes")]),e._v("。")]),e._v(" "),t("p",[e._v("有时查询失败，BE 日志中会出现 "),t("code",[e._v("The server is overcrowded")]),e._v(" 的错误信息，表示连接上有过多的未发送数据。当查询需要发送较大的bitmap字段时，可能会遇到该问题，此时可能通过调大该配置避免该错误。")]),e._v(" "),t("p",[e._v("由于这是一个 brpc 的配置，用户也可以在运行中直接修改该参数。通过访问 "),t("code",[e._v("http://be_host:brpc_port/flags")]),e._v(" 修改。")]),e._v(" "),t("h3",{attrs:{id:"brpc-port"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#brpc-port"}},[e._v("#")]),e._v(" "),t("code",[e._v("brpc_port")])]),e._v(" "),t("h3",{attrs:{id:"buffer-pool-clean-pages-limit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#buffer-pool-clean-pages-limit"}},[e._v("#")]),e._v(" "),t("code",[e._v("buffer_pool_clean_pages_limit")])]),e._v(" "),t("h3",{attrs:{id:"buffer-pool-limit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#buffer-pool-limit"}},[e._v("#")]),e._v(" "),t("code",[e._v("buffer_pool_limit")])]),e._v(" "),t("h3",{attrs:{id:"check-consistency-worker-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-consistency-worker-count"}},[e._v("#")]),e._v(" "),t("code",[e._v("check_consistency_worker_count")])]),e._v(" "),t("h3",{attrs:{id:"chunk-reserved-bytes-limit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chunk-reserved-bytes-limit"}},[e._v("#")]),e._v(" "),t("code",[e._v("chunk_reserved_bytes_limit")])]),e._v(" "),t("h3",{attrs:{id:"clear-transaction-task-worker-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clear-transaction-task-worker-count"}},[e._v("#")]),e._v(" "),t("code",[e._v("clear_transaction_task_worker_count")])]),e._v(" "),t("h3",{attrs:{id:"clone-worker-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clone-worker-count"}},[e._v("#")]),e._v(" "),t("code",[e._v("clone_worker_count")])]),e._v(" "),t("h3",{attrs:{id:"cluster-id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cluster-id"}},[e._v("#")]),e._v(" "),t("code",[e._v("cluster_id")])]),e._v(" "),t("h3",{attrs:{id:"column-dictionary-key-ratio-threshold"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#column-dictionary-key-ratio-threshold"}},[e._v("#")]),e._v(" "),t("code",[e._v("column_dictionary_key_ratio_threshold")])]),e._v(" "),t("h3",{attrs:{id:"column-dictionary-key-size-threshold"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#column-dictionary-key-size-threshold"}},[e._v("#")]),e._v(" "),t("code",[e._v("column_dictionary_key_size_threshold")])]),e._v(" "),t("h3",{attrs:{id:"compress-rowbatches"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compress-rowbatches"}},[e._v("#")]),e._v(" "),t("code",[e._v("compress_rowbatches")])]),e._v(" "),t("h3",{attrs:{id:"create-tablet-worker-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-tablet-worker-count"}},[e._v("#")]),e._v(" "),t("code",[e._v("create_tablet_worker_count")])]),e._v(" "),t("h3",{attrs:{id:"cumulative-compaction-budgeted-bytes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cumulative-compaction-budgeted-bytes"}},[e._v("#")]),e._v(" "),t("code",[e._v("cumulative_compaction_budgeted_bytes")])]),e._v(" "),t("h3",{attrs:{id:"cumulative-compaction-check-interval-seconds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cumulative-compaction-check-interval-seconds"}},[e._v("#")]),e._v(" "),t("code",[e._v("cumulative_compaction_check_interval_seconds")])]),e._v(" "),t("h3",{attrs:{id:"cumulative-compaction-num-threads-per-disk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cumulative-compaction-num-threads-per-disk"}},[e._v("#")]),e._v(" "),t("code",[e._v("cumulative_compaction_num_threads_per_disk")])]),e._v(" "),t("h3",{attrs:{id:"cumulative-compaction-skip-window-seconds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cumulative-compaction-skip-window-seconds"}},[e._v("#")]),e._v(" "),t("code",[e._v("cumulative_compaction_skip_window_seconds")])]),e._v(" "),t("h3",{attrs:{id:"default-num-rows-per-column-file-block"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-num-rows-per-column-file-block"}},[e._v("#")]),e._v(" "),t("code",[e._v("default_num_rows_per_column_file_block")])]),e._v(" "),t("h3",{attrs:{id:"default-query-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-query-options"}},[e._v("#")]),e._v(" "),t("code",[e._v("default_query_options")])]),e._v(" "),t("h3",{attrs:{id:"default-rowset-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-rowset-type"}},[e._v("#")]),e._v(" "),t("code",[e._v("default_rowset_type")])]),e._v(" "),t("h3",{attrs:{id:"delete-worker-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-worker-count"}},[e._v("#")]),e._v(" "),t("code",[e._v("delete_worker_count")])]),e._v(" "),t("h3",{attrs:{id:"disable-mem-pools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disable-mem-pools"}},[e._v("#")]),e._v(" "),t("code",[e._v("disable_mem_pools")])]),e._v(" "),t("h3",{attrs:{id:"disable-storage-page-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disable-storage-page-cache"}},[e._v("#")]),e._v(" "),t("code",[e._v("disable_storage_page_cache")])]),e._v(" "),t("h3",{attrs:{id:"disk-stat-monitor-interval"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disk-stat-monitor-interval"}},[e._v("#")]),e._v(" "),t("code",[e._v("disk_stat_monitor_interval")])]),e._v(" "),t("h3",{attrs:{id:"doris-cgroups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doris-cgroups"}},[e._v("#")]),e._v(" "),t("code",[e._v("doris_cgroups")])]),e._v(" "),t("h3",{attrs:{id:"doris-max-pushdown-conjuncts-return-rate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doris-max-pushdown-conjuncts-return-rate"}},[e._v("#")]),e._v(" "),t("code",[e._v("doris_max_pushdown_conjuncts_return_rate")])]),e._v(" "),t("h3",{attrs:{id:"doris-max-scan-key-num"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doris-max-scan-key-num"}},[e._v("#")]),e._v(" "),t("code",[e._v("doris_max_scan_key_num")])]),e._v(" "),t("h3",{attrs:{id:"doris-scan-range-row-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doris-scan-range-row-count"}},[e._v("#")]),e._v(" "),t("code",[e._v("doris_scan_range_row_count")])]),e._v(" "),t("h3",{attrs:{id:"doris-scanner-queue-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doris-scanner-queue-size"}},[e._v("#")]),e._v(" "),t("code",[e._v("doris_scanner_queue_size")])]),e._v(" "),t("h3",{attrs:{id:"doris-scanner-row-num"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doris-scanner-row-num"}},[e._v("#")]),e._v(" "),t("code",[e._v("doris_scanner_row_num")])]),e._v(" "),t("h3",{attrs:{id:"doris-scanner-thread-pool-queue-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doris-scanner-thread-pool-queue-size"}},[e._v("#")]),e._v(" "),t("code",[e._v("doris_scanner_thread_pool_queue_size")])]),e._v(" "),t("h3",{attrs:{id:"doris-scanner-thread-pool-thread-num"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doris-scanner-thread-pool-thread-num"}},[e._v("#")]),e._v(" "),t("code",[e._v("doris_scanner_thread_pool_thread_num")])]),e._v(" "),t("h3",{attrs:{id:"download-low-speed-limit-kbps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-low-speed-limit-kbps"}},[e._v("#")]),e._v(" "),t("code",[e._v("download_low_speed_limit_kbps")])]),e._v(" "),t("h3",{attrs:{id:"download-low-speed-time"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-low-speed-time"}},[e._v("#")]),e._v(" "),t("code",[e._v("download_low_speed_time")])]),e._v(" "),t("h3",{attrs:{id:"download-worker-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-worker-count"}},[e._v("#")]),e._v(" "),t("code",[e._v("download_worker_count")])]),e._v(" "),t("h3",{attrs:{id:"drop-tablet-worker-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drop-tablet-worker-count"}},[e._v("#")]),e._v(" "),t("code",[e._v("drop_tablet_worker_count")])]),e._v(" "),t("h3",{attrs:{id:"enable-metric-calculator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-metric-calculator"}},[e._v("#")]),e._v(" "),t("code",[e._v("enable_metric_calculator")])]),e._v(" "),t("h3",{attrs:{id:"enable-partitioned-aggregation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-partitioned-aggregation"}},[e._v("#")]),e._v(" "),t("code",[e._v("enable_partitioned_aggregation")])]),e._v(" "),t("h3",{attrs:{id:"enable-prefetch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-prefetch"}},[e._v("#")]),e._v(" "),t("code",[e._v("enable_prefetch")])]),e._v(" "),t("h3",{attrs:{id:"enable-quadratic-probing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-quadratic-probing"}},[e._v("#")]),e._v(" "),t("code",[e._v("enable_quadratic_probing")])]),e._v(" "),t("h3",{attrs:{id:"enable-system-metrics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-system-metrics"}},[e._v("#")]),e._v(" "),t("code",[e._v("enable_system_metrics")])]),e._v(" "),t("h3",{attrs:{id:"enable-token-check"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-token-check"}},[e._v("#")]),e._v(" "),t("code",[e._v("enable_token_check")])]),e._v(" "),t("h3",{attrs:{id:"es-http-timeout-ms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es-http-timeout-ms"}},[e._v("#")]),e._v(" "),t("code",[e._v("es_http_timeout_ms")])]),e._v(" "),t("h3",{attrs:{id:"es-scroll-keepalive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es-scroll-keepalive"}},[e._v("#")]),e._v(" "),t("code",[e._v("es_scroll_keepalive")])]),e._v(" "),t("h3",{attrs:{id:"etl-thread-pool-queue-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etl-thread-pool-queue-size"}},[e._v("#")]),e._v(" "),t("code",[e._v("etl_thread_pool_queue_size")])]),e._v(" "),t("h3",{attrs:{id:"etl-thread-pool-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etl-thread-pool-size"}},[e._v("#")]),e._v(" "),t("code",[e._v("etl_thread_pool_size")])]),e._v(" "),t("h3",{attrs:{id:"exchg-node-buffer-size-bytes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exchg-node-buffer-size-bytes"}},[e._v("#")]),e._v(" "),t("code",[e._v("exchg_node_buffer_size_bytes")])]),e._v(" "),t("h3",{attrs:{id:"file-descriptor-cache-capacity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-descriptor-cache-capacity"}},[e._v("#")]),e._v(" "),t("code",[e._v("file_descriptor_cache_capacity")])]),e._v(" "),t("h3",{attrs:{id:"file-descriptor-cache-clean-interval"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-descriptor-cache-clean-interval"}},[e._v("#")]),e._v(" "),t("code",[e._v("file_descriptor_cache_clean_interval")])]),e._v(" "),t("h3",{attrs:{id:"flush-thread-num-per-store"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flush-thread-num-per-store"}},[e._v("#")]),e._v(" "),t("code",[e._v("flush_thread_num_per_store")])]),e._v(" "),t("h3",{attrs:{id:"force-recovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#force-recovery"}},[e._v("#")]),e._v(" "),t("code",[e._v("force_recovery")])]),e._v(" "),t("h3",{attrs:{id:"fragment-pool-queue-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fragment-pool-queue-size"}},[e._v("#")]),e._v(" "),t("code",[e._v("fragment_pool_queue_size")])]),e._v(" "),t("h3",{attrs:{id:"fragment-pool-thread-num"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fragment-pool-thread-num"}},[e._v("#")]),e._v(" "),t("code",[e._v("fragment_pool_thread_num")])]),e._v(" "),t("h3",{attrs:{id:"heartbeat-service-port"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#heartbeat-service-port"}},[e._v("#")]),e._v(" "),t("code",[e._v("heartbeat_service_port")])]),e._v(" "),t("h3",{attrs:{id:"heartbeat-service-thread-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#heartbeat-service-thread-count"}},[e._v("#")]),e._v(" "),t("code",[e._v("heartbeat_service_thread_count")])]),e._v(" "),t("h3",{attrs:{id:"ignore-broken-disk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ignore-broken-disk"}},[e._v("#")]),e._v(" "),t("code",[e._v("ignore_broken_disk")])]),e._v(" "),t("h3",{attrs:{id:"inc-rowset-expired-sec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inc-rowset-expired-sec"}},[e._v("#")]),e._v(" "),t("code",[e._v("inc_rowset_expired_sec")])]),e._v(" "),t("h3",{attrs:{id:"index-stream-cache-capacity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#index-stream-cache-capacity"}},[e._v("#")]),e._v(" "),t("code",[e._v("index_stream_cache_capacity")])]),e._v(" "),t("h3",{attrs:{id:"load-data-reserve-hours"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-data-reserve-hours"}},[e._v("#")]),e._v(" "),t("code",[e._v("load_data_reserve_hours")])]),e._v(" "),t("h3",{attrs:{id:"load-error-log-reserve-hours"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-error-log-reserve-hours"}},[e._v("#")]),e._v(" "),t("code",[e._v("load_error_log_reserve_hours")])]),e._v(" "),t("h3",{attrs:{id:"load-process-max-memory-limit-bytes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-process-max-memory-limit-bytes"}},[e._v("#")]),e._v(" "),t("code",[e._v("load_process_max_memory_limit_bytes")])]),e._v(" "),t("h3",{attrs:{id:"load-process-max-memory-limit-percent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-process-max-memory-limit-percent"}},[e._v("#")]),e._v(" "),t("code",[e._v("load_process_max_memory_limit_percent")])]),e._v(" "),t("h3",{attrs:{id:"local-library-dir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#local-library-dir"}},[e._v("#")]),e._v(" "),t("code",[e._v("local_library_dir")])]),e._v(" "),t("h3",{attrs:{id:"log-buffer-level"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#log-buffer-level"}},[e._v("#")]),e._v(" "),t("code",[e._v("log_buffer_level")])]),e._v(" "),t("h3",{attrs:{id:"madvise-huge-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#madvise-huge-pages"}},[e._v("#")]),e._v(" "),t("code",[e._v("madvise_huge_pages")])]),e._v(" "),t("h3",{attrs:{id:"make-snapshot-worker-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#make-snapshot-worker-count"}},[e._v("#")]),e._v(" "),t("code",[e._v("make_snapshot_worker_count")])]),e._v(" "),t("h3",{attrs:{id:"max-client-cache-size-per-host"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#max-client-cache-size-per-host"}},[e._v("#")]),e._v(" "),t("code",[e._v("max_client_cache_size_per_host")])]),e._v(" "),t("h3",{attrs:{id:"max-compaction-concurrency"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#max-compaction-concurrency"}},[e._v("#")]),e._v(" "),t("code",[e._v("max_compaction_concurrency")])]),e._v(" "),t("h3",{attrs:{id:"max-consumer-num-per-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#max-consumer-num-per-group"}},[e._v("#")]),e._v(" "),t("code",[e._v("max_consumer_num_per_group")])]),e._v(" "),t("h3",{attrs:{id:"max-cumulative-compaction-num-singleton-deltas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#max-cumulative-compaction-num-singleton-deltas"}},[e._v("#")]),e._v(" "),t("code",[e._v("max_cumulative_compaction_num_singleton_deltas")])]),e._v(" "),t("h3",{attrs:{id:"max-download-speed-kbps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#max-download-speed-kbps"}},[e._v("#")]),e._v(" "),t("code",[e._v("max_download_speed_kbps")])]),e._v(" "),t("h3",{attrs:{id:"max-free-io-buffers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#max-free-io-buffers"}},[e._v("#")]),e._v(" "),t("code",[e._v("max_free_io_buffers")])]),e._v(" "),t("h3",{attrs:{id:"max-garbage-sweep-interval"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#max-garbage-sweep-interval"}},[e._v("#")]),e._v(" "),t("code",[e._v("max_garbage_sweep_interval")])]),e._v(" "),t("h3",{attrs:{id:"max-memory-sink-batch-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#max-memory-sink-batch-count"}},[e._v("#")]),e._v(" "),t("code",[e._v("max_memory_sink_batch_count")])]),e._v(" "),t("h3",{attrs:{id:"max-percentage-of-error-disk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#max-percentage-of-error-disk"}},[e._v("#")]),e._v(" "),t("code",[e._v("max_percentage_of_error_disk")])]),e._v(" "),t("h3",{attrs:{id:"max-runnings-transactions-per-txn-map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#max-runnings-transactions-per-txn-map"}},[e._v("#")]),e._v(" "),t("code",[e._v("max_runnings_transactions_per_txn_map")])]),e._v(" "),t("h3",{attrs:{id:"max-tablet-num-per-shard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#max-tablet-num-per-shard"}},[e._v("#")]),e._v(" "),t("code",[e._v("max_tablet_num_per_shard")])]),e._v(" "),t("h3",{attrs:{id:"mem-limit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mem-limit"}},[e._v("#")]),e._v(" "),t("code",[e._v("mem_limit")])]),e._v(" "),t("h3",{attrs:{id:"memory-limitation-per-thread-for-schema-change"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#memory-limitation-per-thread-for-schema-change"}},[e._v("#")]),e._v(" "),t("code",[e._v("memory_limitation_per_thread_for_schema_change")])]),e._v(" "),t("h3",{attrs:{id:"memory-maintenance-sleep-time-s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#memory-maintenance-sleep-time-s"}},[e._v("#")]),e._v(" "),t("code",[e._v("memory_maintenance_sleep_time_s")])]),e._v(" "),t("h3",{attrs:{id:"memory-max-alignment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#memory-max-alignment"}},[e._v("#")]),e._v(" "),t("code",[e._v("memory_max_alignment")])]),e._v(" "),t("h3",{attrs:{id:"min-buffer-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#min-buffer-size"}},[e._v("#")]),e._v(" "),t("code",[e._v("min_buffer_size")])]),e._v(" "),t("h3",{attrs:{id:"min-compaction-failure-interval-sec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#min-compaction-failure-interval-sec"}},[e._v("#")]),e._v(" "),t("code",[e._v("min_compaction_failure_interval_sec")])]),e._v(" "),t("h3",{attrs:{id:"min-cumulative-compaction-num-singleton-deltas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#min-cumulative-compaction-num-singleton-deltas"}},[e._v("#")]),e._v(" "),t("code",[e._v("min_cumulative_compaction_num_singleton_deltas")])]),e._v(" "),t("h3",{attrs:{id:"min-file-descriptor-number"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#min-file-descriptor-number"}},[e._v("#")]),e._v(" "),t("code",[e._v("min_file_descriptor_number")])]),e._v(" "),t("h3",{attrs:{id:"min-garbage-sweep-interval"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#min-garbage-sweep-interval"}},[e._v("#")]),e._v(" "),t("code",[e._v("min_garbage_sweep_interval")])]),e._v(" "),t("h3",{attrs:{id:"mmap-buffers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mmap-buffers"}},[e._v("#")]),e._v(" "),t("code",[e._v("mmap_buffers")])]),e._v(" "),t("h3",{attrs:{id:"num-cores"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#num-cores"}},[e._v("#")]),e._v(" "),t("code",[e._v("num_cores")])]),e._v(" "),t("h3",{attrs:{id:"num-disks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#num-disks"}},[e._v("#")]),e._v(" "),t("code",[e._v("num_disks")])]),e._v(" "),t("h3",{attrs:{id:"num-threads-per-core"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#num-threads-per-core"}},[e._v("#")]),e._v(" "),t("code",[e._v("num_threads_per_core")])]),e._v(" "),t("h3",{attrs:{id:"num-threads-per-disk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#num-threads-per-disk"}},[e._v("#")]),e._v(" "),t("code",[e._v("num_threads_per_disk")])]),e._v(" "),t("h3",{attrs:{id:"number-tablet-writer-threads"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#number-tablet-writer-threads"}},[e._v("#")]),e._v(" "),t("code",[e._v("number_tablet_writer_threads")])]),e._v(" "),t("h3",{attrs:{id:"path-gc-check"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path-gc-check"}},[e._v("#")]),e._v(" "),t("code",[e._v("path_gc_check")])]),e._v(" "),t("h3",{attrs:{id:"path-gc-check-interval-second"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path-gc-check-interval-second"}},[e._v("#")]),e._v(" "),t("code",[e._v("path_gc_check_interval_second")])]),e._v(" "),t("h3",{attrs:{id:"path-gc-check-step"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path-gc-check-step"}},[e._v("#")]),e._v(" "),t("code",[e._v("path_gc_check_step")])]),e._v(" "),t("h3",{attrs:{id:"path-gc-check-step-interval-ms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path-gc-check-step-interval-ms"}},[e._v("#")]),e._v(" "),t("code",[e._v("path_gc_check_step_interval_ms")])]),e._v(" "),t("h3",{attrs:{id:"path-scan-interval-second"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path-scan-interval-second"}},[e._v("#")]),e._v(" "),t("code",[e._v("path_scan_interval_second")])]),e._v(" "),t("h3",{attrs:{id:"pending-data-expire-time-sec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pending-data-expire-time-sec"}},[e._v("#")]),e._v(" "),t("code",[e._v("pending_data_expire_time_sec")])]),e._v(" "),t("h3",{attrs:{id:"periodic-counter-update-period-ms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#periodic-counter-update-period-ms"}},[e._v("#")]),e._v(" "),t("code",[e._v("periodic_counter_update_period_ms")])]),e._v(" "),t("h3",{attrs:{id:"plugin-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugin-path"}},[e._v("#")]),e._v(" "),t("code",[e._v("plugin_path")])]),e._v(" "),t("h3",{attrs:{id:"port"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[e._v("#")]),e._v(" "),t("code",[e._v("port")])]),e._v(" "),t("h3",{attrs:{id:"pprof-profile-dir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pprof-profile-dir"}},[e._v("#")]),e._v(" "),t("code",[e._v("pprof_profile_dir")])]),e._v(" "),t("h3",{attrs:{id:"priority-networks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#priority-networks"}},[e._v("#")]),e._v(" "),t("code",[e._v("priority_networks")])]),e._v(" "),t("h3",{attrs:{id:"priority-queue-remaining-tasks-increased-frequency"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#priority-queue-remaining-tasks-increased-frequency"}},[e._v("#")]),e._v(" "),t("code",[e._v("priority_queue_remaining_tasks_increased_frequency")])]),e._v(" "),t("h3",{attrs:{id:"publish-version-worker-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publish-version-worker-count"}},[e._v("#")]),e._v(" "),t("code",[e._v("publish_version_worker_count")])]),e._v(" "),t("h3",{attrs:{id:"pull-load-task-dir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pull-load-task-dir"}},[e._v("#")]),e._v(" "),t("code",[e._v("pull_load_task_dir")])]),e._v(" "),t("h3",{attrs:{id:"push-worker-count-high-priority"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#push-worker-count-high-priority"}},[e._v("#")]),e._v(" "),t("code",[e._v("push_worker_count_high_priority")])]),e._v(" "),t("h3",{attrs:{id:"push-worker-count-normal-priority"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#push-worker-count-normal-priority"}},[e._v("#")]),e._v(" "),t("code",[e._v("push_worker_count_normal_priority")])]),e._v(" "),t("h3",{attrs:{id:"push-write-mbytes-per-sec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#push-write-mbytes-per-sec"}},[e._v("#")]),e._v(" "),t("code",[e._v("push_write_mbytes_per_sec")])]),e._v(" "),t("h3",{attrs:{id:"query-scratch-dirs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-scratch-dirs"}},[e._v("#")]),e._v(" "),t("code",[e._v("query_scratch_dirs")])]),e._v(" "),t("h3",{attrs:{id:"read-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read-size"}},[e._v("#")]),e._v(" "),t("code",[e._v("read_size")])]),e._v(" "),t("h3",{attrs:{id:"release-snapshot-worker-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#release-snapshot-worker-count"}},[e._v("#")]),e._v(" "),t("code",[e._v("release_snapshot_worker_count")])]),e._v(" "),t("h3",{attrs:{id:"report-disk-state-interval-seconds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#report-disk-state-interval-seconds"}},[e._v("#")]),e._v(" "),t("code",[e._v("report_disk_state_interval_seconds")])]),e._v(" "),t("h3",{attrs:{id:"report-tablet-interval-seconds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#report-tablet-interval-seconds"}},[e._v("#")]),e._v(" "),t("code",[e._v("report_tablet_interval_seconds")])]),e._v(" "),t("h3",{attrs:{id:"report-task-interval-seconds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#report-task-interval-seconds"}},[e._v("#")]),e._v(" "),t("code",[e._v("report_task_interval_seconds")])]),e._v(" "),t("h3",{attrs:{id:"result-buffer-cancelled-interval-time"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#result-buffer-cancelled-interval-time"}},[e._v("#")]),e._v(" "),t("code",[e._v("result_buffer_cancelled_interval_time")])]),e._v(" "),t("h3",{attrs:{id:"routine-load-thread-pool-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#routine-load-thread-pool-size"}},[e._v("#")]),e._v(" "),t("code",[e._v("routine_load_thread_pool_size")])]),e._v(" "),t("h3",{attrs:{id:"row-nums-check"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#row-nums-check"}},[e._v("#")]),e._v(" "),t("code",[e._v("row_nums_check")])]),e._v(" "),t("h3",{attrs:{id:"scan-context-gc-interval-min"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scan-context-gc-interval-min"}},[e._v("#")]),e._v(" "),t("code",[e._v("scan_context_gc_interval_min")])]),e._v(" "),t("h3",{attrs:{id:"scratch-dirs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scratch-dirs"}},[e._v("#")]),e._v(" "),t("code",[e._v("scratch_dirs")])]),e._v(" "),t("h3",{attrs:{id:"serialize-batch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serialize-batch"}},[e._v("#")]),e._v(" "),t("code",[e._v("serialize_batch")])]),e._v(" "),t("h3",{attrs:{id:"sleep-five-seconds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sleep-five-seconds"}},[e._v("#")]),e._v(" "),t("code",[e._v("sleep_five_seconds")])]),e._v(" "),t("h3",{attrs:{id:"sleep-one-second"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sleep-one-second"}},[e._v("#")]),e._v(" "),t("code",[e._v("sleep_one_second")])]),e._v(" "),t("h3",{attrs:{id:"small-file-dir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#small-file-dir"}},[e._v("#")]),e._v(" "),t("code",[e._v("small_file_dir")])]),e._v(" "),t("h3",{attrs:{id:"snapshot-expire-time-sec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#snapshot-expire-time-sec"}},[e._v("#")]),e._v(" "),t("code",[e._v("snapshot_expire_time_sec")])]),e._v(" "),t("h3",{attrs:{id:"sorter-block-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sorter-block-size"}},[e._v("#")]),e._v(" "),t("code",[e._v("sorter_block_size")])]),e._v(" "),t("h3",{attrs:{id:"status-report-interval"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status-report-interval"}},[e._v("#")]),e._v(" "),t("code",[e._v("status_report_interval")])]),e._v(" "),t("h3",{attrs:{id:"storage-flood-stage-left-capacity-bytes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storage-flood-stage-left-capacity-bytes"}},[e._v("#")]),e._v(" "),t("code",[e._v("storage_flood_stage_left_capacity_bytes")])]),e._v(" "),t("h3",{attrs:{id:"storage-flood-stage-usage-percent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storage-flood-stage-usage-percent"}},[e._v("#")]),e._v(" "),t("code",[e._v("storage_flood_stage_usage_percent")])]),e._v(" "),t("h3",{attrs:{id:"storage-medium-migrate-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storage-medium-migrate-count"}},[e._v("#")]),e._v(" "),t("code",[e._v("storage_medium_migrate_count")])]),e._v(" "),t("h3",{attrs:{id:"storage-page-cache-limit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storage-page-cache-limit"}},[e._v("#")]),e._v(" "),t("code",[e._v("storage_page_cache_limit")])]),e._v(" "),t("h3",{attrs:{id:"storage-root-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storage-root-path"}},[e._v("#")]),e._v(" "),t("code",[e._v("storage_root_path")])]),e._v(" "),t("h3",{attrs:{id:"streaming-load-max-mb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#streaming-load-max-mb"}},[e._v("#")]),e._v(" "),t("code",[e._v("streaming_load_max_mb")])]),e._v(" "),t("h3",{attrs:{id:"streaming-load-rpc-max-alive-time-sec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#streaming-load-rpc-max-alive-time-sec"}},[e._v("#")]),e._v(" "),t("code",[e._v("streaming_load_rpc_max_alive_time_sec")])]),e._v(" "),t("h3",{attrs:{id:"sync-tablet-meta"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sync-tablet-meta"}},[e._v("#")]),e._v(" "),t("code",[e._v("sync_tablet_meta")])]),e._v(" "),t("h3",{attrs:{id:"sys-log-dir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sys-log-dir"}},[e._v("#")]),e._v(" "),t("code",[e._v("sys_log_dir")])]),e._v(" "),t("h3",{attrs:{id:"sys-log-level"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sys-log-level"}},[e._v("#")]),e._v(" "),t("code",[e._v("sys_log_level")])]),e._v(" "),t("h3",{attrs:{id:"sys-log-roll-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sys-log-roll-mode"}},[e._v("#")]),e._v(" "),t("code",[e._v("sys_log_roll_mode")])]),e._v(" "),t("h3",{attrs:{id:"sys-log-roll-num"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sys-log-roll-num"}},[e._v("#")]),e._v(" "),t("code",[e._v("sys_log_roll_num")])]),e._v(" "),t("h3",{attrs:{id:"sys-log-verbose-level"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sys-log-verbose-level"}},[e._v("#")]),e._v(" "),t("code",[e._v("sys_log_verbose_level")])]),e._v(" "),t("h3",{attrs:{id:"sys-log-verbose-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sys-log-verbose-modules"}},[e._v("#")]),e._v(" "),t("code",[e._v("sys_log_verbose_modules")])]),e._v(" "),t("h3",{attrs:{id:"tablet-map-shard-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tablet-map-shard-size"}},[e._v("#")]),e._v(" "),t("code",[e._v("tablet_map_shard_size")])]),e._v(" "),t("h3",{attrs:{id:"tablet-meta-checkpoint-min-interval-secs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tablet-meta-checkpoint-min-interval-secs"}},[e._v("#")]),e._v(" "),t("code",[e._v("tablet_meta_checkpoint_min_interval_secs")])]),e._v(" "),t("h3",{attrs:{id:"tablet-meta-checkpoint-min-new-rowsets-num"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tablet-meta-checkpoint-min-new-rowsets-num"}},[e._v("#")]),e._v(" "),t("code",[e._v("tablet_meta_checkpoint_min_new_rowsets_num")])]),e._v(" "),t("h3",{attrs:{id:"tablet-stat-cache-update-interval-second"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tablet-stat-cache-update-interval-second"}},[e._v("#")]),e._v(" "),t("code",[e._v("tablet_stat_cache_update_interval_second")])]),e._v(" "),t("h3",{attrs:{id:"tablet-writer-open-rpc-timeout-sec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tablet-writer-open-rpc-timeout-sec"}},[e._v("#")]),e._v(" "),t("code",[e._v("tablet_writer_open_rpc_timeout_sec")])]),e._v(" "),t("h3",{attrs:{id:"tc-free-memory-rate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tc-free-memory-rate"}},[e._v("#")]),e._v(" "),t("code",[e._v("tc_free_memory_rate")])]),e._v(" "),t("h3",{attrs:{id:"tc-use-memory-min"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tc-use-memory-min"}},[e._v("#")]),e._v(" "),t("code",[e._v("tc_use_memory_min")])]),e._v(" "),t("h3",{attrs:{id:"thrift-connect-timeout-seconds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thrift-connect-timeout-seconds"}},[e._v("#")]),e._v(" "),t("code",[e._v("thrift_connect_timeout_seconds")])]),e._v(" "),t("h3",{attrs:{id:"thrift-rpc-timeout-ms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thrift-rpc-timeout-ms"}},[e._v("#")]),e._v(" "),t("code",[e._v("thrift_rpc_timeout_ms")])]),e._v(" "),t("h3",{attrs:{id:"trash-file-expire-time-sec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#trash-file-expire-time-sec"}},[e._v("#")]),e._v(" "),t("code",[e._v("trash_file_expire_time_sec")])]),e._v(" "),t("h3",{attrs:{id:"txn-commit-rpc-timeout-ms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#txn-commit-rpc-timeout-ms"}},[e._v("#")]),e._v(" "),t("code",[e._v("txn_commit_rpc_timeout_ms")])]),e._v(" "),t("h3",{attrs:{id:"txn-map-shard-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#txn-map-shard-size"}},[e._v("#")]),e._v(" "),t("code",[e._v("txn_map_shard_size")])]),e._v(" "),t("h3",{attrs:{id:"txn-shard-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#txn-shard-size"}},[e._v("#")]),e._v(" "),t("code",[e._v("txn_shard_size")])]),e._v(" "),t("h3",{attrs:{id:"unused-rowset-monitor-interval"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unused-rowset-monitor-interval"}},[e._v("#")]),e._v(" "),t("code",[e._v("unused_rowset_monitor_interval")])]),e._v(" "),t("h3",{attrs:{id:"upload-worker-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upload-worker-count"}},[e._v("#")]),e._v(" "),t("code",[e._v("upload_worker_count")])]),e._v(" "),t("h3",{attrs:{id:"use-mmap-allocate-chunk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-mmap-allocate-chunk"}},[e._v("#")]),e._v(" "),t("code",[e._v("use_mmap_allocate_chunk")])]),e._v(" "),t("h3",{attrs:{id:"user-function-dir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-function-dir"}},[e._v("#")]),e._v(" "),t("code",[e._v("user_function_dir")])]),e._v(" "),t("h3",{attrs:{id:"web-log-bytes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-log-bytes"}},[e._v("#")]),e._v(" "),t("code",[e._v("web_log_bytes")])]),e._v(" "),t("h3",{attrs:{id:"webserver-num-workers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webserver-num-workers"}},[e._v("#")]),e._v(" "),t("code",[e._v("webserver_num_workers")])]),e._v(" "),t("h3",{attrs:{id:"webserver-port"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webserver-port"}},[e._v("#")]),e._v(" "),t("code",[e._v("webserver_port")])]),e._v(" "),t("h3",{attrs:{id:"write-buffer-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#write-buffer-size"}},[e._v("#")]),e._v(" "),t("code",[e._v("write_buffer_size")])])])}),[],!1,null,null,null);a.default=s.exports}}]);