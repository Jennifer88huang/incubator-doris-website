(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{474:function(e,t,a){"use strict";a.r(t);var o=a(43),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"statistics-of-query-execution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statistics-of-query-execution"}},[e._v("#")]),e._v(" Statistics of query execution")]),e._v(" "),a("p",[e._v("This document focuses on introducing the "),a("strong",[e._v("Running Profile")]),e._v(" which recorded runtime status of Doris in query execution. Using these statistical information, we can understand the execution of frgment to become a expert of Doris's "),a("strong",[e._v("debugging and tuning")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"noun-interpretation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[e._v("#")]),e._v(" Noun Interpretation")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("FE")]),e._v(": Frontend, frontend node of Doris. Responsible for metadata management and request access.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("BE")]),e._v(": Backend, backend node of Doris. Responsible for query execution and data storage.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Fragment")]),e._v(": FE will convert the execution of specific SQL statements into corresponding fragments and distribute them to BE for execution. BE will execute corresponding fragments and gather the result of RunningProfile to send back FE.")])])]),e._v(" "),a("h2",{attrs:{id:"basic-concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-concepts"}},[e._v("#")]),e._v(" Basic concepts")]),e._v(" "),a("p",[e._v("FE splits the query plan into fragments and distributes them to BE for task execution. BE records the statistics of "),a("strong",[e._v("Running State")]),e._v(" when executing fragment. BE print the outputs statistics of fragment execution into the log. FE can also collect these statistics recorded by each fragment and print the results on FE's web page.")]),e._v(" "),a("h2",{attrs:{id:"specific-operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specific-operation"}},[e._v("#")]),e._v(" Specific operation")]),e._v(" "),a("p",[e._v("Turn on the report switch on FE through MySQL command")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> set is_report_success=true; \n")])])]),a("p",[e._v("After executing the corresponding SQL statement, we can see the report information of the corresponding SQL statement on the FE web page like the picture below.\n"),a("img",{attrs:{src:e.$withBase("/images/running_profile.png"),alt:"image.png"}})]),e._v(" "),a("p",[e._v("The latest  "),a("strong",[e._v("100 statements")]),e._v(" executed will be listed here. We can view detailed statistics of RunningProfile.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Query:\n  Summary:\n    Query ID: 9664061c57e84404-85ae111b8ba7e83a\n    Start Time: 2020-05-02 10:34:57\n    End Time: 2020-05-02 10:35:08\n    Total: 10s323ms\n    Query Type: Query\n    Query State: EOF\n    Doris Version: trunk\n    User: root\n    Default Db: default_cluster:test\n    Sql Statement: select max(Bid_Price) from quotes group by Symbol\n")])])]),a("p",[e._v("Here is a detailed list of  "),a("code",[e._v("query ID, execution time, execution statement")]),e._v(" and other summary information. The next step is to print the details of each fragment collected from be.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("   Fragment 0:\n     Instance 9664061c57e84404-85ae111b8ba7e83d (host=TNetworkAddress(hostname:192.168.0.1, port:9060)):(Active: 10s270ms, % non-child: 0.14%)\n        - MemoryLimit: 2.00 GB\n        - BytesReceived: 168.08 KB\n        - PeakUsedReservation: 0.00 \n        - SendersBlockedTimer: 0ns\n        - DeserializeRowBatchTimer: 501.975us\n        - PeakMemoryUsage: 577.04 KB\n        - RowsProduced: 8.322K (8322)\n       EXCHANGE_NODE (id=4):(Active: 10s256ms, % non-child: 99.35%)\n          - ConvertRowBatchTime: 180.171us\n          - PeakMemoryUsage: 0.00 \n          - RowsReturned: 8.322K (8322)\n          - MemoryUsed: 0.00 \n          - RowsReturnedRate: 811\n")])])]),a("p",[e._v("The fragment ID is listed here; "),a("code",[e._v("hostname")]),e._v(" show the be node executing the fragment; "),a("code",[e._v("active: 10s270ms")]),e._v("show the total execution time of the node;  "),a("code",[e._v("non child: 0.14%")]),e._v(" show the execution time of the node self except the execution time of the subchild node. Subsequently, the statistics of the child nodes will be printed in turn. "),a("strong",[e._v("here you can distinguish the parent-child relationship by intent")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"profile-statistic-analysis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#profile-statistic-analysis"}},[e._v("#")]),e._v(" Profile statistic analysis")]),e._v(" "),a("p",[e._v("There are many statistical information collected at BE.  so we list the corresponding meanings of profile are below:")]),e._v(" "),a("h4",{attrs:{id:"fragment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fragment"}},[e._v("#")]),e._v(" "),a("code",[e._v("Fragment")])]),e._v(" "),a("ul",[a("li",[e._v("AverageThreadTokens: Number of threads used to execute fragment, excluding the usage of thread pool")]),e._v(" "),a("li",[e._v("PeakReservation: Peak memory used by buffer pool")]),e._v(" "),a("li",[e._v("MemoryLimit: Memory limit at query")]),e._v(" "),a("li",[e._v("PeakMemoryUsage: Peak memory usage of instance")]),e._v(" "),a("li",[e._v("RowsProduced: Number of rows that process")])]),e._v(" "),a("h4",{attrs:{id:"blockmgr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blockmgr"}},[e._v("#")]),e._v(" "),a("code",[e._v("BlockMgr")])]),e._v(" "),a("ul",[a("li",[e._v("BlocksCreated: Number of Block be created by BlockMgr")]),e._v(" "),a("li",[e._v("BlocksRecycled: Number of Block be recycled by BlockMgr")]),e._v(" "),a("li",[e._v("BytesWritten: How many bytes be writen to spill to disk")]),e._v(" "),a("li",[e._v("MaxBlockSize: Max size of one Block")]),e._v(" "),a("li",[e._v("TotalReadBlockTime: Total time read block from disk")])]),e._v(" "),a("h4",{attrs:{id:"datastreamsender"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datastreamsender"}},[e._v("#")]),e._v(" "),a("code",[e._v("DataStreamSender")])]),e._v(" "),a("ul",[a("li",[e._v("BytesSent: Total bytes data sent")]),e._v(" "),a("li",[e._v("IgnoreRows: Rows filtered")]),e._v(" "),a("li",[e._v("OverallThroughput: Total throughput = BytesSent / Time")]),e._v(" "),a("li",[e._v("SerializeBatchTime: Sending data serialization time")]),e._v(" "),a("li",[e._v("UncompressedRowBatchSize: Size of rowbatch before sending data compression")])]),e._v(" "),a("h4",{attrs:{id:"exchange-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exchange-node"}},[e._v("#")]),e._v(" "),a("code",[e._v("EXCHANGE_NODE")])]),e._v(" "),a("ul",[a("li",[e._v("BytesReceived: Size of bytes received by network")]),e._v(" "),a("li",[e._v("DataArrivalWaitTime: Total waiting time of sender to push data")]),e._v(" "),a("li",[e._v("FirstBatchArrivalWaitTime: The time waiting for the first batch come from sender")]),e._v(" "),a("li",[e._v("DeserializeRowBatchTimer: Time consuming to receive data deserialization")]),e._v(" "),a("li",[e._v("SendersBlockedTotalTimer(*): When the DataStreamRecv's queue buffer is full，wait time of sender")]),e._v(" "),a("li",[e._v("ConvertRowBatchTime: Time taken to transfer received data to RowBatch")]),e._v(" "),a("li",[e._v("RowsReturned: Number of receiving rows")]),e._v(" "),a("li",[e._v("RowsReturnedRate: Rate of rows received")])]),e._v(" "),a("h4",{attrs:{id:"sort-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sort-node"}},[e._v("#")]),e._v(" "),a("code",[e._v("SORT_NODE")])]),e._v(" "),a("ul",[a("li",[e._v("InMemorySortTime: In memory sort time")]),e._v(" "),a("li",[e._v("InitialRunsCreated: Number of initialize sort run")]),e._v(" "),a("li",[e._v("MergeGetNext: Time cost of MergeSort from multiple sort_run to get the next batch (only show spilled disk)")]),e._v(" "),a("li",[e._v("MergeGetNextBatch: Time cost MergeSort one sort_run to get the next batch (only show spilled disk)")]),e._v(" "),a("li",[e._v("SortDataSize: Total sorted data")]),e._v(" "),a("li",[e._v("TotalMergesPerformed: Number of external sort merges")])]),e._v(" "),a("h4",{attrs:{id:"aggregation-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aggregation-node"}},[e._v("#")]),e._v(" "),a("code",[e._v("AGGREGATION_NODE")])]),e._v(" "),a("ul",[a("li",[e._v("PartitionsCreated: Number of partition split by aggregate")]),e._v(" "),a("li",[e._v("GetResultsTime: Time to get aggregate results from each partition")]),e._v(" "),a("li",[e._v("HTResizeTime:  Time spent in resizing hashtable")]),e._v(" "),a("li",[e._v("HTResize:  Number of times hashtable resizes")]),e._v(" "),a("li",[e._v("HashBuckets: Number of buckets in hashtable")]),e._v(" "),a("li",[e._v("HashBucketsWithDuplicate:  Number of buckets with duplicatenode in hashtable")]),e._v(" "),a("li",[e._v("HashCollisions:  Number of hash conflicts generated")]),e._v(" "),a("li",[e._v("HashDuplicateNodes:  Number of duplicate nodes with the same buckets in hashtable")]),e._v(" "),a("li",[e._v("HashFailedProbe:  Number of failed probe operations")]),e._v(" "),a("li",[e._v("HashFilledBuckets:  Number of buckets filled data")]),e._v(" "),a("li",[e._v("HashProbe:  Number of hashtable probe")]),e._v(" "),a("li",[e._v("HashTravelLength:  The number of steps moved when hashtable queries")])]),e._v(" "),a("h4",{attrs:{id:"olap-scan-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#olap-scan-node"}},[e._v("#")]),e._v(" "),a("code",[e._v("OLAP_SCAN_NODE")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("OLAP_SCAN_NODE")]),e._v(" is responsible for specific data scanning tasks. One "),a("code",[e._v("OLAP_SCAN_NODE")]),e._v(" will generate one or more "),a("code",[e._v("OlapScanner")]),e._v(" threads. Each Scanner thread is responsible for scanning part of the data.")]),e._v(" "),a("p",[e._v("Some or all of the predicate conditions in the query will be pushed to "),a("code",[e._v("OLAP_SCAN_NODE")]),e._v(". Some of these predicate conditions will continue to be pushed down to the storage engine in order to use the storage engine's index for data filtering. The other part will be kept in "),a("code",[e._v("OLAP_SCAN_NODE")]),e._v(" to filter the data returned from the storage engine.")]),e._v(" "),a("p",[e._v("The profile of a typical "),a("code",[e._v("OLAP_SCAN_NODE")]),e._v(" is as follows. Some indicators will have different meanings depending on the storage format (V1 or V2).")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("OLAP_SCAN_NODE (id=0): (Active: 4.050ms, non-child: 35.68%)\n   -BitmapIndexFilterTimer: 0.000ns # Time consuming to filter data using bitmap index.\n   -BlockConvertTime: 7.433ms   # Time consuming to convert a vectorized block into a row structure RowBlock. Vectorized Block is VectorizedRowBatch in V1, and RowBlockV2 in V2.\n   -BlockFetchTime: 36.934ms    # Rowset Reader time to get Block.\n   -BlockLoadTime: 23.368ms # time of SegmentReader(V1) or SegmentIterator(V2) to get the block time.\n   -BlockSeekCount: 0   # The number of block seek times when reading segments.\n   -BlockSeekTime: 3.062ms  # Time consuming for block seek when reading segments.\n   -BlocksLoad: 221 # number of blocks read\n   -BytesRead: 6.59 MB  # The amount of data read from the data file. Assuming that 10 32-bit integers are read, the amount of data is 10 * 4B = 40 Bytes. This data only represents the fully expanded size of the data in memory, and does not represent the actual IO size.\n   -CachedPagesNum: 0   # In V2 only, when PageCache is enabled, the number of pages that hit Cache.\n   -CompressedBytesRead: 1.36 MB    # V1, the size of the data read from the file before decompression. In V2, the uncompressed size of Pages that did not hit PageCache.\n   -DecompressorTimer: 4.194ms  # Data decompression takes time.\n   -IOTimer: 1.404ms    # IO time to actually read data from the operating system.\n   -IndexLoadTime: 1.521ms  # In V1 only, it takes time to read Index Stream.\n   -NumDiskAccess: 6    # The number of disks involved in this ScanNode.\n   -NumScanners: 25 # The number of Scanners generated by this ScanNode.\n   -NumSegmentFiltered: 4   # Number of Segment filtered by column statistic when creating Segment Iterator.\n   -NumSegmentTotal: 20    # Total number of Segment related to this scan.\n   -PeakMemoryUsage: 0  # meaningless\n   -PerReadThreadRawHdfsThroughput: 0.00 /sec   # meaningless\n   -RawRowsRead: 141.71K    # The number of raw rows read in the storage engine. See below for details.\n   -ReaderInitTime: 16.515ms    # OlapScanner time to initialize Reader. V1 includes the time to form MergeHeap. V2 includes the time to generate Iterators at all levels and read the first block.\n   -RowsBitmapFiltered: 0   # Number of rows filtered by bitmap index\n   -RowsBloomFilterFiltered: 0  # In V2 only, the number of rows filtered by the BloomFilter index.\n   -RowsDelFiltered: 0  # V1 indicates the number of rows filtered according to the delete condition. V2 also includes the number of rows filtered by BloomFilter and some predicate conditions.\n   -RowsPushedCondFiltered: 0   # Filter the conditions based on the predicate passed down, such as the condition passed from BuildTable to ProbeTable in Join calculation. This value is inaccurate because if the filtering effect is poor, it will not be filtered.\n   -RowsRead: 132.78K   # The number of rows returned from the storage engine to the Scanner, excluding the number of rows filtered by the Scanner.\n   -RowsReturned: 132.78K   # The number of rows returned from ScanNode to the upper node.\n   -RowsReturnedRate: 32.78 M/sec   # RowsReturned/ActiveTime\n   -RowsStatsFiltered: 0    # In V2, the number of rows filtered according to Zonemap with predicate conditions. V1 also contains the number of rows filtered by BloomFilter.\n   -RowsVectorPredFiltered: 0   # The number of rows filtered by the vectorized conditional filtering operation.\n   -ScanTime: 49.239ms # Time-consuming statistics of Scanner calling get_next() method.\n   -ScannerThreadsInvoluntaryContextSwitches: 0 # meaningless\n   -ScannerThreadsTotalWallClockTime: 0.000ns   # meaningless\n     -MaterializeTupleTime(*): 0.000ns  # meaningless\n     -ScannerThreadsSysTime: 0.000ns    # meaningless\n     -ScannerThreadsUserTime: 0.000ns   # meaningless\n   -ScannerThreadsVoluntaryContextSwitches: 0   # meaningless\n   -ShowHintsTime: 0.000ns  # meaningless in V2. Part of the data is read in V1 to perform ScanRange segmentation.\n   -TabletCount: 25 # The number of tablets involved in this ScanNode.\n   -TotalPagesNum: 0    # In V2 only, the total number of pages read.\n   -TotalRawReadTime(*): 0.000ns    # meaningless\n   -TotalReadThroughput: 0.00 /sec  # meaningless\n   -UncompressedBytesRead: 4.28 MB  # V1 is the decompressed size of the read data file (if the file does not need to be decompressed, the file size is directly counted). In V2, only the uncompressed size of the PageCache is counted (if the Page does not need to be decompressed, the Page size is directly counted)\n   -VectorPredEvalTime: 0.000ns # Time consuming of vectorized conditional filtering operation.\n")])])]),a("ul",[a("li",[a("p",[e._v("Some notes on the number of rows in Profile")]),e._v(" "),a("p",[e._v("The metrics related to the number of rows in the Profile are:")]),e._v(" "),a("ul",[a("li",[e._v("NumSegmentFiltered")]),e._v(" "),a("li",[e._v("NumSegmentTotal")])]),e._v(" "),a("p",[e._v("The number of segments actually read can be obtained through these two metrics.")]),e._v(" "),a("ul",[a("li",[e._v("RowsKeyRangeFiltered")]),e._v(" "),a("li",[e._v("RowsBitmapIndexFiltered")]),e._v(" "),a("li",[e._v("RowsBloomFilterFiltered")]),e._v(" "),a("li",[e._v("RowsStatsFiltered")]),e._v(" "),a("li",[e._v("RowsDelFiltered")]),e._v(" "),a("li",[e._v("RawRowsRead")]),e._v(" "),a("li",[e._v("RowsRead")]),e._v(" "),a("li",[e._v("RowsReturned")])]),e._v(" "),a("p",[e._v("The predicate conditions in a query are filtered in the storage engine and Scanner respectively. Among the above indicators, the group of metrics "),a("code",[e._v("Rows***Filtered")]),e._v(" describes the number of rows filtered in the storage engine. The last three metrics describe the number of lines processed in Scanner.")]),e._v(" "),a("p",[e._v("The following only describes the process of reading data in Segment V2 format. In the Segment V1 format, the meaning of these metrics are slightly different.")]),e._v(" "),a("p",[e._v("When reading a V2 format segment, it will first filter based on the Key range (the query range composed of the prefix key), and the number of filtered lines is recorded in "),a("code",[e._v("RowsKeyRangeFiltered")]),e._v(". After that, the data is filtered using the Bitmap index, and the filtered rows are recorded in "),a("code",[e._v("RowsBitmapIndexFiltered")]),e._v(". After that, the data is filtered using the BloomFilter index and recorded in "),a("code",[e._v("RowsBloomFilterFiltered")]),e._v(". The value of "),a("code",[e._v("RowsBloomFilterFiltered")]),e._v(" is the difference between the total number of rows in the Segment (not the number of rows after being filtered by the Bitmap index) and the number of remaining rows after BloomFilter filtering, so the data filtered by BloomFilter may overlap with the data filtered by Bitmap.")]),e._v(" "),a("p",[a("code",[e._v("RowsStatsFiltered")]),e._v(" records the number of rows filtered by other predicate conditions. This includes the predicate conditions pushed down to the storage engine and the Delete condition in the storage engine.")]),e._v(" "),a("p",[a("code",[e._v("RowsDelFiltered")]),e._v(" contains the number of filtered rows recorded by "),a("code",[e._v("RowsBloomFilterFiltered")]),e._v(" and "),a("code",[e._v("RowsStatsFiltered")]),e._v(".")]),e._v(" "),a("p",[a("code",[e._v("RawRowsRead")]),e._v(" is the number of rows that need to be read after the above filtering. The "),a("code",[e._v("RowsRead")]),e._v(" is the number of rows returned to the Scanner. "),a("code",[e._v("RowsRead")]),e._v(" is usually smaller than "),a("code",[e._v("RawRowsRead")]),e._v(", because returning from the storage engine to the Scanner may go through a data aggregation.")]),e._v(" "),a("p",[a("code",[e._v("RowsReturned")]),e._v(" is the number of rows that ScanNode will eventually return to the upper node. "),a("code",[e._v("RowsReturned")]),e._v(" will usually be less than\n"),a("code",[e._v("RowsRead")]),e._v(". Because there will be some predicate conditions that are not pushed down to the storage engine on the Scanner, it will be filtered in Scanner.")]),e._v(" "),a("p",[e._v("Through the above indicators, you can roughly analyze the number of rows processed by the storage engine and the final number of rows after filtering. Through the set of indicators of "),a("code",[e._v("Rows***Filtered")]),e._v(", you can also analyze whether the query condition is pushed down to the storage engine and the filtering effect of different indexes.")]),e._v(" "),a("p",[e._v("If the gap between "),a("code",[e._v("RawRowsRead")]),e._v(" and "),a("code",[e._v("RowsRead")]),e._v(" is large, it means that a large number of rows are aggregated, and the aggregation may be time-consuming. If the gap between "),a("code",[e._v("RowsRead")]),e._v(" and "),a("code",[e._v("RowsReturned")]),e._v(" is large, it means that many lines are filtered in Scanner. This shows that many highly selected conditions are not pushed to the storage engine. The filtering efficiency in Scanner is worse than that in the storage engine.")])]),e._v(" "),a("li",[a("p",[e._v("Simple analysis of Scan Node Profile")]),e._v(" "),a("p",[e._v("OlapScanNode's Profile is usually used to analyze the efficiency of data scanning. In addition to the information about the number of rows that can be used to infer the predicate pushdown and index usage, the following aspects can also be used for simple analysis.")]),e._v(" "),a("ul",[a("li",[e._v("First of all, many indicators, such as "),a("code",[e._v("IOTimer")]),e._v(", "),a("code",[e._v("BlockFetchTime")]),e._v(", etc. are the accumulation of all Scanner thread indicators, so the value may be relatively large. And because the Scanner thread reads data asynchronously, these cumulative indicators can only reflect the cumulative working time of the Scanner, and do not directly represent the time cost of ScanNode. The proportion of time spent by ScanNode in the entire query plan is the value recorded in the "),a("code",[e._v("Active")]),e._v(" field. Sometimes it appears that "),a("code",[e._v("IOTimer")]),e._v(" has tens of seconds, while "),a("code",[e._v("Active")]),e._v(" actually has only a few seconds. This situation is usually because: 1. "),a("code",[e._v("IOTimer")]),e._v(" is the accumulated time of multiple Scanners, and there are many Scanners. 2. The upper nodes are more time-consuming. For example, the upper node takes 100 seconds, while the lower ScanNode only takes 10 seconds. The field reflected in "),a("code",[e._v("Active")]),e._v(" may only be a few milliseconds. Because while the upper node is processing data, the ScanNode has asynchronously scanned the data and prepared the data. When the upper-layer node obtains data from ScanNode, it can obtain the prepared data, so the "),a("code",[e._v("Active")]),e._v(" time is very short.")]),e._v(" "),a("li",[e._v("IOTimer is the IO time, which can directly reflect the time-consuming IO operation. Here is the accumulated IO time of all Scanner threads.")]),e._v(" "),a("li",[e._v("NumScanners indicates the number of Scanner threads. Too many or too few threads will affect query efficiency. At the same time, some aggregate indicators can be divided by the number of threads to roughly estimate the time spent by each thread.")]),e._v(" "),a("li",[e._v("TabletCount represents the number of tablets that need to be scanned. Excessive numbers may mean that a large number of random reads and data merge operations are required.")]),e._v(" "),a("li",[e._v("UncompressedBytesRead indirectly reflects the amount of data read. If the value is large, it indicates that there may be a large number of IO operations.")]),e._v(" "),a("li",[e._v("CachedPagesNum and TotalPagesNum. For V2 format, you can view the hit of PageCache. The higher the hit rate, the less time the IO and decompression operations take.")])])])]),e._v(" "),a("h4",{attrs:{id:"buffer-pool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buffer-pool"}},[e._v("#")]),e._v(" "),a("code",[e._v("Buffer pool")])]),e._v(" "),a("ul",[a("li",[e._v("AllocTime: Memory allocation time")]),e._v(" "),a("li",[e._v("CumulativeAllocationBytes: Cumulative amount of memory allocated")]),e._v(" "),a("li",[e._v("CumulativeAllocations: Cumulative number of memory allocations")]),e._v(" "),a("li",[e._v("PeakReservation: Peak of reservation")]),e._v(" "),a("li",[e._v("PeakUnpinnedBytes: Amount of memory data of unpin")]),e._v(" "),a("li",[e._v("PeakUsedReservation: Peak usage of reservation")]),e._v(" "),a("li",[e._v("ReservationLimit: Limit of reservation of bufferpool")])])])}),[],!1,null,null,null);t.default=n.exports}}]);