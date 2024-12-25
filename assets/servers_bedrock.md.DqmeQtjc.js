import{_ as e,e as t,d as i,Q as a}from"./chunks/framework.CuLWBCQE.js";const k=JSON.parse('{"title":"Bedrock Protocol","description":"Bedrock Game protocol.","frontmatter":{"title":"Bedrock Protocol","category":"Protocols","mentions":["theaddonn","bedrock-crustaceans"],"description":"Bedrock Game protocol."},"headers":[{"level":2,"title":"Datatypes","slug":"datatypes","link":"#datatypes","children":[]},{"level":2,"title":"Encodings","slug":"encodings","link":"#encodings","children":[]},{"level":2,"title":"Gamepacket Header","slug":"gamepacket-header","link":"#gamepacket-header","children":[]},{"level":2,"title":"Compression","slug":"compression","link":"#compression","children":[]},{"level":2,"title":"Encryption","slug":"encryption","link":"#encryption","children":[]},{"level":2,"title":"Caching","slug":"caching","link":"#caching","children":[]},{"level":2,"title":"Login Process","slug":"login-process","link":"#login-process","children":[{"level":3,"title":"Network Settings Request","slug":"network-settings-request","link":"#network-settings-request","children":[]},{"level":3,"title":"Network Settings","slug":"network-settings","link":"#network-settings","children":[]},{"level":3,"title":"Login","slug":"login","link":"#login","children":[]},{"level":3,"title":"HandshakeServerToClient (Optional)","slug":"handshakeservertoclient-optional","link":"#handshakeservertoclient-optional","children":[]},{"level":3,"title":"HandshakeClientToServer (Optional)","slug":"handshakeclienttoserver-optional","link":"#handshakeclienttoserver-optional","children":[]},{"level":3,"title":"ResourcePacksInfo","slug":"resourcepacksinfo","link":"#resourcepacksinfo","children":[]},{"level":3,"title":"ClientCacheStatus (Optional)","slug":"clientcachestatus-optional","link":"#clientcachestatus-optional","children":[]},{"level":3,"title":"ResourcePackClientResponse","slug":"resourcepackclientresponse","link":"#resourcepackclientresponse","children":[]},{"level":3,"title":"ResourcePacksStack","slug":"resourcepacksstack","link":"#resourcepacksstack","children":[]},{"level":3,"title":"ResourcePackClientResponse","slug":"resourcepackclientresponse-1","link":"#resourcepackclientresponse-1","children":[]},{"level":3,"title":"PlayStatus","slug":"playstatus","link":"#playstatus","children":[]},{"level":3,"title":"StartGamePacket","slug":"startgamepacket","link":"#startgamepacket","children":[]},{"level":3,"title":"PlayStatus","slug":"playstatus-1","link":"#playstatus-1","children":[]}]},{"level":2,"title":"Sending Resource Packs","slug":"sending-resource-packs","link":"#sending-resource-packs","children":[]},{"level":2,"title":"Sending Chunks","slug":"sending-chunks","link":"#sending-chunks","children":[]},{"level":2,"title":"Sending Inventory Contents","slug":"sending-inventory-contents","link":"#sending-inventory-contents","children":[]},{"level":2,"title":"Implementations","slug":"implementations","link":"#implementations","children":[]}],"relativePath":"servers/bedrock.md","filePath":"servers/bedrock.md"}'),n={name:"servers/bedrock.md"},o=a('<h2 id="datatypes" tabindex="-1">Datatypes <a class="header-anchor" href="#datatypes" aria-label="Permalink to &quot;Datatypes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Size</th><th>Notes</th></tr></thead><tbody><tr><td>i8 (byte)</td><td>1</td><td></td></tr><tr><td>u8 (unsigned byte)</td><td>1</td><td></td></tr><tr><td>i16 (short)</td><td>2</td><td>Most often encoded as Little Endian, Sometimes as Big Endian</td></tr><tr><td>u16 (unsigned short)</td><td>2</td><td>Most often encoded as Little Endian, Sometimes as Big Endian</td></tr><tr><td>i32 (int)</td><td>4</td><td>Most often encoded as Little Endian, Sometimes as Big Endian</td></tr><tr><td>u32 (unsigned int)</td><td>4</td><td>Most often encoded as Little Endian, Sometimes as Big Endian</td></tr><tr><td>i64 (int)</td><td>8</td><td>Most often encoded as Little Endian, Sometimes as Big Endian</td></tr><tr><td>u64 (unsigned long)</td><td>8</td><td>Most often encoded as Little Endian, Sometimes as Big Endian</td></tr><tr><td>varint i32 (varint int)</td><td>N/A</td><td>Variable length encoded i32</td></tr><tr><td>varint u32 (varint unsigned int)</td><td>N/A</td><td>Variable length encoded u32</td></tr><tr><td>varint i64 (varint int)</td><td>N/A</td><td>Variable length encoded i64</td></tr><tr><td>varint u64 (varint unsigned long)</td><td>N/A</td><td>Variable length encoded u64</td></tr><tr><td>f32 (float)</td><td>4</td><td>Always encoded as Little Endian</td></tr><tr><td>f64 (double)</td><td>8</td><td>Always encoded as Little Endian</td></tr></tbody></table><h2 id="encodings" tabindex="-1">Encodings <a class="header-anchor" href="#encodings" aria-label="Permalink to &quot;Encodings&quot;">​</a></h2><p>The Bedrock Protocol can use multiple different Encodings for integers, such as</p><ul><li>Little Endian</li><li>Big Endian</li><li>Variable Length Integer (VarInts)</li></ul><p>These change how integers are written and read, both Little Endian and Big Endian are just Endianness. They basically determine the order in which bytes are read and interpreted, more can be read about them <a href="https://en.wikipedia.org/wiki/Endianness" target="_blank" rel="noreferrer">here, on wikipedia</a>.</p><p>On the other hand, VarInts are an encoding scheme used to represent integers of varying sizes using a minimal number of bytes. Instead of using a fixed number of bytes (like 4 bytes for a 32-bit integer), a VarInt uses a variable number of bytes depending on the magnitude of the number, which can help save space when encoding small numbers. It&#39;s commonly used in protocols like Google Protocol Buffers, Minecraft, and others. More information on VarInts is available at <a href="https://protobuf.dev/programming-guides/encoding/" target="_blank" rel="noreferrer">Google&#39;s proto buf documentation</a>.</p><h2 id="gamepacket-header" tabindex="-1">Gamepacket Header <a class="header-anchor" href="#gamepacket-header" aria-label="Permalink to &quot;Gamepacket Header&quot;">​</a></h2><p>In Bedrock, the GamePacket header is a crucial part of packet structure. It contains metadata about the packet, such as its length, type, and information about the source and target clients. The header is encoded into a compact format that reduces bandwidth usage by using variable-length integers for certain fields.</p><p>The GamePacket header is composed of:</p><ul><li>Gamepacket Length (varint u32), the total size of the packet, including the header and payload</li><li>GamePacket Header (14 bits encoded as varint u32), the header contains: <ul><li>Gamepacket ID (10 bits), identifies the specific Gamepacket type</li><li>SubClient Sender ID (2 bits), identifies the sender client in multi-client scenarios</li><li>SubClient Target ID (2 bits), identifies the target client in multi-client scenarios</li></ul></li></ul><p>The Gamepacket ID is a maximum of 10 bits, which means that there are up to 2^10 (1024) possible gamepacket IDs. But IDs 200 through 299 are used for spin-offs, so they are free to use for custom packets etc.</p><p>The subclient fields (sender and target) are 2 bits wide, meaning they can take on values from 0 to 3. This allows for identifying up to 4 different clients in scenarios where multiple players share the same connection (e.g., split-screen play).</p><h2 id="compression" tabindex="-1">Compression <a class="header-anchor" href="#compression" aria-label="Permalink to &quot;Compression&quot;">​</a></h2><p>In Bedrock, data is often compressed to optimize network performance and reduce bandwidth usage. Compression is applied to outgoing data packets if they exceed a certain threshold size, which can be configured based on the compression algorithm being used. The primary goal of compression is to minimize the data size while ensuring that decompression on the receiving end is efficient and accurate.</p><p>Bedrock supports multiple compression algorithms that vary in terms of efficiency, speed, and size reduction. Each connection can negotiate which algorithm to use, and different compression methods are identified by unique identifiers during communication. The primary algorithms used include:</p><ul><li>Zlib: A widely-used compression technique that offers configurable levels of compression. This algorithm provides a tradeoff between speed and the level of compression, with higher compression levels yielding smaller output but requiring more computational power. It is effective for compressing large packets.</li><li>Snappy: A compression algorithm designed for high-speed compression and decompression, focusing more on performance than achieving the highest compression ratios. This algorithm is typically used when speed is critical, especially for smaller data packets.</li><li>No Compression: In some cases, compression may not be necessary, especially for small data packets/debugging purposes. If the size of a packet is below a certain threshold, compression may be skipped entirely to avoid unnecessary overhead.</li></ul><p>(Long story, short... Always use Zlib in production, since it is the best because the others either have problems or are not suited for production)</p><p>Compression is only applied if the size of the data to be compressed exceeds a predefined threshold. Each algorithm has a configurable threshold, meaning if the size of the data is below this threshold, the packet is sent as-is, without any compression.</p><p>In Bedrock, the beginning of each packet contains a compression identifier, which is a crucial piece of metadata that indicates whether the packet is compressed and, if so, which compression algorithm was used. This identifier allows the receiving end to understand how to process the incoming data—whether it needs to be decompressed or can be read directly.</p><p>The following identifiers are used for the available compression methods:</p><ul><li>Zlib: 0x00</li><li>Snappy: 0x01</li><li>No Compression: 0xFF or 0xFFFF (in <a href="#network-settings">NetworkSettings</a>)</li></ul><p>This compression ID is stored before every gamepacket as am u8 and in the <a href="#network-settings">NetworkSettings</a>, where it is an u16 and defines the default compression method to use.</p><h2 id="encryption" tabindex="-1">Encryption <a class="header-anchor" href="#encryption" aria-label="Permalink to &quot;Encryption&quot;">​</a></h2><p>To be documented...</p><h2 id="caching" tabindex="-1">Caching <a class="header-anchor" href="#caching" aria-label="Permalink to &quot;Caching&quot;">​</a></h2><p>To be documented...</p><h2 id="login-process" tabindex="-1">Login Process <a class="header-anchor" href="#login-process" aria-label="Permalink to &quot;Login Process&quot;">​</a></h2><p>The Bedrock Protocol&#39;s login sequence is made up of multiple stages, these being:</p><ul><li>PreLogin</li><li>Login</li><li>Spawn</li><li>Play</li></ul><h3 id="network-settings-request" tabindex="-1">Network Settings Request <a class="header-anchor" href="#network-settings-request" aria-label="Permalink to &quot;Network Settings Request&quot;">​</a></h3><p>(Client -&gt; Server)</p><p><a href="https://mojang.github.io/bedrock-protocol-docs/html/RequestNetworkSettingsPacket.html" target="_blank" rel="noreferrer">Reference in the Official Docs</a></p><p>Since v554 (v1.19.20), this is the first packet sent by the client. The NetworkSettingsRequestPacket has one single field that being the current protocol version of the client.</p><p>This is the first PreLoin packet.</p><h3 id="network-settings" tabindex="-1">Network Settings <a class="header-anchor" href="#network-settings" aria-label="Permalink to &quot;Network Settings&quot;">​</a></h3><p>(Server -&gt; Client)</p><p><a href="https://mojang.github.io/bedrock-protocol-docs/html/NetworkSettingsPacket.html" target="_blank" rel="noreferrer">Reference in the Official Docs</a></p><p>Used to set up information for the connection, this is where the compression is set and initialized. Refer to <a href="#compression">Compression</a> to find out more about compression here.</p><p>This is the last PreLoin packet.</p><h3 id="login" tabindex="-1">Login <a class="header-anchor" href="#login" aria-label="Permalink to &quot;Login&quot;">​</a></h3><p>(Client -&gt; Server)</p><p><a href="https://mojang.github.io/bedrock-protocol-docs/html/LoginPacket.html" target="_blank" rel="noreferrer">Reference in the Official Docs</a></p><p>The LoginPacket contains a lot of information on the client, such as the client protocol version (again). This should not be used since it is deprecated in newer versions.</p><p>It also contains a JSON array of <a href="https://jwt.io/introduction" target="_blank" rel="noreferrer">JWTs</a> called the certificate chain which is encoded as a String. These JWTs contain verified information about the client. The array contains at minimum 1 JWT (Not authenticated to Xbox Live services), and at maximum 3 JWTs (Is authenticated to Xbox Live services). They store data such as the players display name, xuid and uuid. As well as sandbox- and title ID, when authenticated. If the 2nd and 3rd JWT are missing then the player has not signed in to their Xbox live account and is currently not authenticated, the sent data can hence why not be trusted.</p><p>The LoginPacket also contains another JWT encoded as a String, that being the raw token. It contains information about the player such as:</p><ul><li>SelfSignedId</li><li>ServerAddress = (unresolved url if applicable)</li><li>ClientRandomId</li><li>SkinId</li><li>SkinData</li><li>SkinImageWidth</li><li>SkinImageHeight</li><li>CapeData</li><li>CapeImageWidth</li><li>CapeImageHeight</li><li>SkinResourcePatch</li><li>SkinGeometryData</li><li>SkinGeometryDataEngineVersion</li><li>SkinAnimationData</li><li>PlayFabId</li><li>AnimatedImageData = Array of: <ul><li>Type</li><li>Image</li><li>ImageWidth</li><li>ImageHeight</li><li>Frames</li><li>AnimationExpression</li></ul></li><li>ArmSize</li><li>SkinColor</li><li>PersonaPieces = Array of: <ul><li>PackId</li><li>PieceId</li><li>IsDefault</li><li>PieceType</li><li>ProductId</li></ul></li><li>PieceTintColors = Array of: <ul><li>PieceType</li><li>Colors = Array of color hexstrings</li></ul></li><li>IsEduMode (if edu mode)</li><li>TenantId (if edu mode)</li><li>ADRole (if edu mode)</li><li>IsEditorMode</li><li>GameVersion</li><li>DeviceModel</li><li>DeviceOS = (see enumeration: BuildPlatform)</li><li>DefaultInputMode = (see enumeration: InputMode)</li><li>CurrentInputMode = (see enumeration: InputMode)</li><li>UIProfile = (see enumeration: UIProfile)</li><li>GuiScale</li><li>LanguageCode</li><li>PlatformUserId</li><li>ThirdPartyName</li><li>ThirdPartyNameOnly</li><li>PlatformOnlineId</li><li>PlatformOfflineId</li><li>DeviceId</li><li>TrustedSkin</li><li>PremiumSkin</li><li>PersonaSkin</li><li>OverrideSkin</li><li>CapeOnClassicSkin</li><li>CapeId</li><li>CompatibleWithClientSideChunkGen</li></ul><p>This is the first packet for the Login stage.</p><h3 id="handshakeservertoclient-optional" tabindex="-1">HandshakeServerToClient (Optional) <a class="header-anchor" href="#handshakeservertoclient-optional" aria-label="Permalink to &quot;HandshakeServerToClient (Optional)&quot;">​</a></h3><p>(Server -&gt; Client)</p><p><a href="https://mojang.github.io/bedrock-protocol-docs/html/ServerToClientHandshakePacket.html" target="_blank" rel="noreferrer">Reference in the Official Docs</a></p><p>Optionally, if it is sent it initializes encryption. Read more about it in the <a href="#encryption">Encryption Section</a>.</p><p>To be documented...</p><h3 id="handshakeclienttoserver-optional" tabindex="-1">HandshakeClientToServer (Optional) <a class="header-anchor" href="#handshakeclienttoserver-optional" aria-label="Permalink to &quot;HandshakeClientToServer (Optional)&quot;">​</a></h3><p>(Client -&gt; Server)</p><p><a href="https://mojang.github.io/bedrock-protocol-docs/html/ClientToServerHandshakePacket.html" target="_blank" rel="noreferrer">Reference in the Official Docs</a></p><p>If the client has initialized Encryption correctly, it responds with this packet to signal that the Handshake was successful. This packet is completely empty</p><h3 id="resourcepacksinfo" tabindex="-1">ResourcePacksInfo <a class="header-anchor" href="#resourcepacksinfo" aria-label="Permalink to &quot;ResourcePacksInfo&quot;">​</a></h3><p>(Server -&gt; Client)</p><p><a href="https://mojang.github.io/bedrock-protocol-docs/html/ResourcePacksInfoPacket.html" target="_blank" rel="noreferrer">Reference in the Official Docs</a></p><p>Sends metadata about available resource packs and addons. If you want to send any kind of packs, look into the <a href="#sending-resource-packs">Sending Resource Packs Section</a>. If both the ResourcePacksInfo and ResourcePacksStack are empty, these packets can be batched. Then there is only one ClientCacheStatus (Optionally) and ResourcePackClientResponse.</p><h3 id="clientcachestatus-optional" tabindex="-1">ClientCacheStatus (Optional) <a class="header-anchor" href="#clientcachestatus-optional" aria-label="Permalink to &quot;ClientCacheStatus (Optional)&quot;">​</a></h3><p>(Client -&gt; Server)</p><p><a href="https://mojang.github.io/bedrock-protocol-docs/html/ClientCacheStatusPacket.html" target="_blank" rel="noreferrer">Reference in the Official Docs</a></p><p>If the client supports Caching then it sends this packet, containing one bool indicating caching support. Caching support enables certain possibilities in the protocol, read more about them in the <a href="#caching">Caching Section</a>.</p><h3 id="resourcepackclientresponse" tabindex="-1">ResourcePackClientResponse <a class="header-anchor" href="#resourcepackclientresponse" aria-label="Permalink to &quot;ResourcePackClientResponse&quot;">​</a></h3><p>(Client -&gt; Server)</p><p><a href="https://mojang.github.io/bedrock-protocol-docs/html/ResourcePackClientResponsePacket.html" target="_blank" rel="noreferrer">Reference in the Official Docs</a></p><p>A Reply to the previous ResourcePacksInfoPacket, describing the current status of the Resource Pack downloading. If you want to send any kind of packs, look into the <a href="#sending-resource-packs">Sending Resource Packs Section</a>.</p><h3 id="resourcepacksstack" tabindex="-1">ResourcePacksStack <a class="header-anchor" href="#resourcepacksstack" aria-label="Permalink to &quot;ResourcePacksStack&quot;">​</a></h3><p>(Server -&gt; Client)</p><p><a href="https://mojang.github.io/bedrock-protocol-docs/html/ResourcePackStackPacket.html" target="_blank" rel="noreferrer">Reference in the Official Docs</a></p><p>Always replied to a ResourcePackClientResponse, until the client has downloaded all packs.</p><h3 id="resourcepackclientresponse-1" tabindex="-1">ResourcePackClientResponse <a class="header-anchor" href="#resourcepackclientresponse-1" aria-label="Permalink to &quot;ResourcePackClientResponse&quot;">​</a></h3><p>(Client -&gt; Server)</p><p><a href="https://mojang.github.io/bedrock-protocol-docs/html/ResourcePackClientResponsePacket.html" target="_blank" rel="noreferrer">Reference in the Official Docs</a></p><p>A Reply to the previous ResourcePacksInfoPacket, describing the current status of the Resource Pack downloading. If you want to send any kind of packs, look into the <a href="#sending-resource-packs">Sending Resource Packs Section</a>. If this packet indicates that the client has downloaded all required packs, the login process may continue.</p><h3 id="playstatus" tabindex="-1">PlayStatus <a class="header-anchor" href="#playstatus" aria-label="Permalink to &quot;PlayStatus&quot;">​</a></h3><p>(Server -&gt; Client)</p><p><a href="https://mojang.github.io/bedrock-protocol-docs/html/ClientToServerHandshakePacket.html" target="_blank" rel="noreferrer">Reference in the Official Docs</a></p><p>It contains a single enum indicating the play status (Status of the Login Process/Stage). If the Login stage was successful, the enum should be set to <code>LoginSuccess</code>.</p><p>This is the last packet for the Login stage.</p><h3 id="startgamepacket" tabindex="-1">StartGamePacket <a class="header-anchor" href="#startgamepacket" aria-label="Permalink to &quot;StartGamePacket&quot;">​</a></h3><p>(Server -&gt; Client)</p><p><a href="https://mojang.github.io/bedrock-protocol-docs/html/ClientToServerHandshakePacket.html" target="_blank" rel="noreferrer">Reference in the Official Docs</a></p><p>This is the first packet in the Spawn stage.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>After this packet, you can already send <a href="#sending-inventory-contents">Inventory Contents</a> or <a href="#sending-chunks">Chunks</a>. The client is ready and just waits until you allow it to spawn.</p></div><h3 id="playstatus-1" tabindex="-1">PlayStatus <a class="header-anchor" href="#playstatus-1" aria-label="Permalink to &quot;PlayStatus&quot;">​</a></h3><p>It contains a single enum indicating the play status (Status of the Login Process/Stage). If the Spawn stage was successful, the enum should be set to <code>PlayerSpawn</code>.</p><p>This is the last packet for the Spawn stage.</p><h2 id="sending-resource-packs" tabindex="-1">Sending Resource Packs <a class="header-anchor" href="#sending-resource-packs" aria-label="Permalink to &quot;Sending Resource Packs&quot;">​</a></h2><p>To be documented...</p><h2 id="sending-chunks" tabindex="-1">Sending Chunks <a class="header-anchor" href="#sending-chunks" aria-label="Permalink to &quot;Sending Chunks&quot;">​</a></h2><p>To be documented...</p><h2 id="sending-inventory-contents" tabindex="-1">Sending Inventory Contents <a class="header-anchor" href="#sending-inventory-contents" aria-label="Permalink to &quot;Sending Inventory Contents&quot;">​</a></h2><p>To be documented...</p><h2 id="implementations" tabindex="-1">Implementations <a class="header-anchor" href="#implementations" aria-label="Permalink to &quot;Implementations&quot;">​</a></h2><p>Not everything can be explained in great detail via documentation, that&#39;s why looking at existing implementations is very helpful. Here is list of Bedrock Protocol implementations</p><table tabindex="0"><thead><tr><th>Name</th><th>Description</th><th>Language</th></tr></thead><tbody><tr><td><a href="https://github.com/CloudburstMC/Protocol" target="_blank" rel="noreferrer">CloudburstMC/Protocol</a></td><td>A protocol library for Minecraft Bedrock Edition</td><td>Java</td></tr><tr><td><a href="https://github.com/pmmp/BedrockProtocol" target="_blank" rel="noreferrer">PMMP/BedrockProtocol</a></td><td>An implementation of the Minecraft: Bedrock Edition protocol in PHP</td><td>PHP</td></tr><tr><td><a href="https://github.com/Sandertv/gophertunnel" target="_blank" rel="noreferrer">gophertunnel</a></td><td>General purpose library for Minecraft Bedrock Edition software written in Go</td><td>Go</td></tr><tr><td><a href="https://github.com/bedrock-crustaceans/bedrockrs" target="_blank" rel="noreferrer">bedrockrs</a></td><td>Universal library for MCBE in Rust</td><td>Rust</td></tr></tbody></table><p>This page is a WIP, feel free to contribute as it is still being worked on.</p>',100),r=[o];function s(l,c,d,h,p,u){return i(),t("div",null,r)}const m=e(n,[["render",s]]);export{k as __pageData,m as default};
